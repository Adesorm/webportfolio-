export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body;

    if (!name || !email || !message || !recaptchaToken) {
      return res.status(400).json({
        success: false,
        message: "Please complete the form and reCAPTCHA.",
      });
    }

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

    console.log("Google reCAPTCHA status:", googleResponse.status);

    console.log("Google reCAPTCHA response:", googleText);

    let googleResult;

    try {
      googleResult = JSON.parse(googleText);
    } catch (error) {
      console.error("Google returned invalid JSON:", googleText);

      return res.status(500).json({
        success: false,
        message: "reCAPTCHA verification returned an invalid response.",
      });
    }

    if (!googleResult.success) {
      console.error("reCAPTCHA verification failed:", googleResult);

      return res.status(400).json({
        success: false,
        message: "reCAPTCHA verification failed. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "reCAPTCHA verified successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
}
