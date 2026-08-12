export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body;

    // ==============================
    // BASIC VALIDATION
    // ==============================
    if (!name || !email || !message || !recaptchaToken) {
      return res.status(400).json({
        success: false,
        message: "Please complete the form and reCAPTCHA.",
      });
    }

    // ==============================
    // 1. VERIFY GOOGLE reCAPTCHA
    // ==============================
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

    const googleText = await googleResponse.text();

    console.log("Google status:", googleResponse.status);
    console.log("Google response:", googleText);

    let googleResult;

    try {
      googleResult = JSON.parse(googleText);
    } catch {
      return res.status(500).json({
        success: false,
        message: "Google reCAPTCHA returned an invalid response.",
        debug: googleText,
      });
    }

    if (!googleResult.success) {
      console.error("reCAPTCHA verification failed:", googleResult);

      return res.status(400).json({
        success: false,
        message: "reCAPTCHA verification failed.",
        debug: googleResult,
      });
    }

    // ==============================
    // 2. SEND TO WEB3FORMS
    // ==============================
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: "New message from Portfolio Contact Form",
        name: name,
        email: email,
        message: message,
      }),
    });

    const web3Text = await web3Response.text();

    console.log("=================================");
    console.log("Web3Forms HTTP status:", web3Response.status);
    console.log("Web3Forms raw response:", web3Text);
    console.log("=================================");

    let web3Result;

    try {
      web3Result = JSON.parse(web3Text);
    } catch {
      return res.status(500).json({
        success: false,
        message: "Web3Forms returned a non-JSON response.",
        debug: web3Text,
      });
    }

    // ==============================
    // 3. WEB3FORMS ERROR
    // ==============================
    if (!web3Result.success) {
      console.error("Web3Forms rejected request:", web3Result);

      return res.status(500).json({
        success: false,
        message:
          web3Result.message ||
          web3Result.body?.message ||
          "Web3Forms rejected the request.",
        debug: web3Result,
      });
    }

    // ==============================
    // 4. SUCCESS
    // ==============================
    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      debug: error.message,
    });
  }
}
