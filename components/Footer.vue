<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- Branding -->
      <div class="footer-brand">
        <div class="brand-name">
          <span class="material-symbols-outlined">
            code
          </span>

          <span>ADESORM CABANISAN</span>
        </div>

        <p>
          © 2026 Adesorm Cabanisan • Built with Coffee &amp; Code
        </p>
      </div>

      <!-- Navigation -->
      <nav class="footer-nav">
        <a href="#landing">Home</a>
        <a href="#projects">My Projects</a>
        <a href="#tools">Tools</a>
        <a href="#contact">Contact</a>
      </nav>

      <!-- Icons -->
      <div class="footer-icons">
        <a
          href="#"
          aria-label="Share"
        >
          <span class="material-symbols-outlined">
            share
          </span>
        </a>

        <a
          href="#"
          aria-label="Code"
        >
          <span class="material-symbols-outlined">
            code_blocks
          </span>
        </a>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 55px 24px;

  background: #e7eeff;

  border-top: 1px solid rgba(190, 199, 212, 0.3);
}

.footer-container {
  width: min(1200px, 100%);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 40px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.brand-name {
  display: flex;
  align-items: center;
  gap: 10px;

  color: #244a64;

  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.brand-name .material-symbols-outlined {
  color: #00629d;
  font-size: 22px;
}

.footer-brand p {
  margin: 0;

  color: #3f4852;

  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
}

.footer-nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.footer-nav a {
  color: #3f4852;

  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;

  text-decoration: none;

  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: #00629d;
}

.footer-icons {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-icons a {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #f9f9ff;
  border: 1px solid rgba(190, 199, 212, 0.4);

  color: #3f4852;

  text-decoration: none;

  transition: all 0.2s ease;
}

.footer-icons a:hover {
  color: #00629d;
  border-color: #00629d;
  transform: translateY(-2px);
}

.footer-icons .material-symbols-outlined {
  font-size: 20px;
}

@media (max-width: 850px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-brand {
    align-items: center;
  }

  .footer-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 500px) {
  .footer {
    padding: 45px 20px;
  }

  .footer-nav {
    gap: 18px;
  }
}
</style>