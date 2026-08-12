<script setup>
import { reactive, ref } from "vue";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();

const WEB3FORMS_ACCESS_KEY = "d73298de-1877-445e-b2d3-8f1384356f4b";

const RECAPTCHA_SITE_KEY = "6LcidoItAAAAAAQNIAr53Cs92q2bNOtv3ak2bLls";

const subject = "New message from Portfolio Contact Form";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const isLoading = ref(false);

const getRecaptchaToken = () => {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error("reCAPTCHA has not loaded yet."));
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, {
          action: "contact",
        })
        .then((token) => {
          resolve(token);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

const sendMessage = async () => {
  if (isLoading.value) return;

  isLoading.value = true;

  try {
    // Get a fresh reCAPTCHA token when the user submits
    const recaptchaToken = await getRecaptchaToken();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: subject,
        name: form.name,
        email: form.email,
        message: form.message,
        recaptcha_response: recaptchaToken,
      }),
    });

    const result = await response.json();

    if (result.success) {
      notyf.success("Message Sent!");

      form.name = "";
      form.email = "";
      form.message = "";
    } else {
      console.error("Web3Forms error:", result);

      notyf.error(result.message || "Failed to send message.");
    }
  } catch (error) {
    console.error("Contact form error:", error);

    notyf.error("Unable to send message. Please try again.");
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <!-- Left side -->
      <div class="contact-info">
        <h2>Let's talk over coffee</h2>

        <p class="contact-description">
          Have a project in mind or just want to chat about the latest tech? My
          inbox is always open.
        </p>

        <!-- Email -->
        <div class="contact-detail">
          <div class="contact-icon">
            <span class="material-symbols-outlined"> mail </span>
          </div>

          <div>
            <span class="detail-label">EMAIL ME</span>

            <a href="mailto:cadesorm@gmail.com"> cadesorm@gmail.com </a>
          </div>
        </div>

        <!-- Location -->
        <div class="contact-detail">
          <div class="contact-icon">
            <span class="material-symbols-outlined"> location_on </span>
          </div>

          <div>
            <span class="detail-label">LOCATION</span>

            <span class="location-text"> Salcedo, Ilocos Sur </span>
          </div>
        </div>

        <!-- Map -->
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps?q=Salcedo,Ilocos%20Sur&output=embed"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            title="Map showing Salcedo, Ilocos Sur"
          ></iframe>
        </div>
      </div>

      <!-- Right side -->
      <form class="contact-form" @submit.prevent="sendMessage">
        <div class="form-row">
          <!-- Name -->
          <div class="form-group">
            <label for="name">NAME</label>

            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Full name"
              autocomplete="name"
              required
            />
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email">EMAIL</label>

            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="john@example.com"
              autocomplete="email"
              required
            />
          </div>
        </div>

        <!-- Message -->
        <div class="form-group message-group">
          <label for="message">MESSAGE</label>

          <textarea
            id="message"
            v-model="form.message"
            placeholder="Tell me about your project..."
            autocomplete="off"
            required
          ></textarea>
        </div>

        <!-- Submit -->
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? "Sending..." : "Send Message" }}
        </button>
      </form>
    </div>
  </section>
</template>
<style scoped>
.contact-section {
  padding: 90px 24px 120px;

  background: #f0f3ff;
  background-image: radial-gradient(
    circle,
    rgba(0, 98, 157, 0.035) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

.contact-container {
  width: min(1200px, 100%);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;

  padding: 55px 70px;

  background: #ffffff;

  border-radius: 28px;

  box-shadow: 0 20px 60px -30px rgba(17, 28, 44, 0.3);
}

/* LEFT */

.contact-info h2 {
  margin: 0;

  color: #111c2c;

  font-family: "Hanken Grotesk", sans-serif;
  font-size: 48px;
  line-height: 1.15;
  font-weight: 700;
}

.contact-description {
  max-width: 520px;

  margin: 35px 0 45px;

  color: #3f4852;

  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 17px;
  line-height: 1.6;
}

.contact-detail {
  display: flex;
  align-items: center;
  gap: 18px;

  margin-bottom: 25px;
}

.contact-icon {
  width: 54px;
  height: 54px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #e7f3fb;
  color: #00629d;
}

.contact-icon .material-symbols-outlined {
  font-size: 27px;
}

.detail-label {
  display: block;

  margin-bottom: 4px;

  color: #00629d;

  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
}

.contact-detail a,
.location-text {
  color: #111c2c;

  font-family: "Hanken Grotesk", sans-serif;
  font-size: 18px;
  font-weight: 600;

  text-decoration: none;
}

.contact-detail a:hover {
  color: #00629d;
}

.map-container {
  width: 100%;
  height: 195px;

  margin-top: 35px;

  overflow: hidden;

  border-radius: 4px;
}

.map-container iframe {
  width: 100%;
  height: 100%;

  border: 0;
}

/* FORM */

.contact-form {
  display: flex;
  flex-direction: column;

  padding-top: 5px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 10px;

  color: #244a64;

  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
}

.form-group input,
.form-group textarea {
  width: 100%;

  box-sizing: border-box;

  padding: 17px 18px;

  border: 1px solid #d8e3fa;
  border-radius: 10px;

  background: #f9f9ff;

  color: #111c2c;

  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.form-group input {
  height: 54px;
}

.form-group textarea {
  min-height: 340px;

  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #00629d;

  box-shadow: 0 0 0 3px rgba(0, 98, 157, 0.08);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #6f7883;
}

.message-group {
  margin-top: 30px;
}

.contact-form button {
  width: 100%;

  margin-top: 32px;
  padding: 17px 25px;

  border: none;
  border-radius: 9px;

  background: #00629d;
  color: #ffffff;

  font-family: "Hanken Grotesk", sans-serif;
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  box-shadow: 0 12px 25px -15px rgba(0, 98, 157, 0.6);

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.contact-form button:hover {
  background: #004f7e;
  transform: translateY(-2px);
}

/* TABLET */

@media (max-width: 950px) {
  .contact-container {
    grid-template-columns: 1fr;

    padding: 45px;
  }

  .contact-form {
    padding-top: 0;
  }

  .form-group textarea {
    min-height: 250px;
  }
}

/* MOBILE */

@media (max-width: 600px) {
  .contact-section {
    padding: 60px 20px 80px;
  }

  .contact-container {
    padding: 35px 25px;

    border-radius: 20px;
  }

  .contact-info h2 {
    font-size: 38px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .map-container {
    height: 180px;
  }
}
</style>
