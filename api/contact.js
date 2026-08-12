export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body || {};

    // Check environment variables first
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("RECAPTCHA_SECRET_KEY is missing");
      return res.status(500).json({
        success: false,
        message: "RECAPTCHA_SECRET_KEY is not configured on Vercel.",
      });
    }

    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      console.error("WEB3FORMS_ACCESS_KEY is missing");
      return res.status(500).json({
        success: false,
        message: "WEB3FORMS_ACCESS_KEY is not configured on Vercel.",
      });
    }

    // Basic validation
    if (!name || !email || !message || !recaptchaToken) {
      return res.status(400).json({
        success: false,
        message: "Please complete the form and reCAPTCHA.",
      });
    }

    // ==========================================
    // 1. VERIFY reCAPTCHA WITH GOOGLE
    // ==========================================

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

    console.log("Google reCAPTCHA HTTP status:", googleResponse.status);
    console.log("Google reCAPTCHA response:", googleText);

    let googleResult;

    try {
      googleResult = JSON.parse(googleText);
    } catch (error) {
      console.error("Google returned invalid JSON:", googleText);

      return res.status(500).json({
        success: false,
        message: "Invalid response from Google reCAPTCHA.",
      });
    }

    if (!googleResult.success) {
      console.error("reCAPTCHA verification failed:", googleResult);

      return res.status(400).json({
        success: false,
        message: "reCAPTCHA verification failed.",
        details: googleResult["error-codes"] || [],
      });
    }

    // ==========================================
    // 2. SEND MESSAGE THROUGH WEB3FORMS
    // ==========================================

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

    const web3Text = await web3Response.text();

    console.log("Web3Forms HTTP status:", web3Response.status);
    console.log("Web3Forms response:", web3Text);

    let web3Result;

    try {
      web3Result = JSON.parse(web3Text);
    } catch (error) {
      console.error("Web3Forms returned invalid JSON:", web3Text);

      return res.status(500).json({
        success: false,
        message: "Invalid response from Web3Forms.",
      });
    }

    if (!web3Result.success) {
      console.error("Web3Forms error:", web3Result);

      return res.status(500).json({
        success: false,
        message: web3Result.message || "Failed to send your message.",
      });
    }

    // ==========================================
    // SUCCESS
    // ==========================================

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("CONTACT API CRASH:", error);

    return res.status(500).json({
      success: false,
      message: error?.message || "Server error. Please try again later.",
    });
  }
}
