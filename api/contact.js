export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body;

    // Basic validation
    if (!name || !email || !message || !recaptchaToken) {
      return res.status(400).json({
        success: false,
        message: "Please complete the form and reCAPTCHA.",
      });
    }

    // 1. Verify reCAPTCHA v2 with Google
    const googleResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      },
    );

    const googleResult = await googleResponse.json();

    if (!googleResult.success) {
      console.error("reCAPTCHA verification failed:", googleResult);

      return res.status(400).json({
        success: false,
        message: "reCAPTCHA verification failed. Please try again.",
      });
    }

    // 2. Send message through Web3Forms
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: "New message from Portfolio Contact Form",
        name,
        email,
        message,
      }),
    });

    const web3Result = await web3Response.json();

    if (!web3Result.success) {
      console.error("Web3Forms error:", web3Result);

      return res.status(500).json({
        success: false,
        message: "Failed to send your message.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
}
