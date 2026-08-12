<template>
  <section id="landing" class="hero-section">
    <div class="hero-container">
      <!-- Left: Text -->
      <div class="hero-content">
        <div class="availability">
          <span class="availability-dot"></span>
          Available for hire
        </div>

        <div class="hero-text">
          <h1>
            I'm
            <span>Adesorm Cabanisan</span>,
          </h1>

          <h1>
            Full Stack Web<br />
            Developer.
          </h1>

          <p>
            Crafting high-performance web applications with a blend of technical
            precision and creative design. I turn complex problems into elegant,
            coffee-fueled solutions.
          </p>
        </div>

        <div class="hero-buttons">
          <a href="#projects" class="primary-button"> View Portfolio </a>

          <a
            href="/Adesorm-Cabanisan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="secondary-button"
          >
            View Resume
          </a>

          <a href="#contact" class="secondary-button"> Let's Talk </a>
        </div>
      </div>

      <!-- Right: Profile Image -->
      <div class="hero-image-wrapper">
        <div class="hero-glow"></div>

        <div class="hero-image">
          <img src="/images/adesorm1.png" alt="Adesorm Cabanisan" />
        </div>

        <span class="decorative-bracket bracket-left"> { </span>

        <span class="decorative-bracket bracket-right"> } </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: calc(100vh - 80px);
  padding: 80px 24px 60px;
  background: #f9f9ff;
  background-image: radial-gradient(
    circle at 80% 20%,
    rgba(0, 163, 255, 0.08) 0%,
    transparent 40%
  );
}

.hero-container {
  width: min(1200px, 100%);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.availability {
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 9px 18px;

  border-radius: 999px;

  background: rgba(0, 163, 255, 0.08);
  border: 1px solid rgba(0, 163, 255, 0.25);

  color: #00629d;

  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.availability-dot {
  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: #00629d;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero-text h1 {
  margin: 0;

  color: #111c2c;

  font-family: "Hanken Grotesk", sans-serif;
  font-size: clamp(42px, 5vw, 64px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: 800;
}

.hero-text h1 span {
  color: #00629d;
}

.hero-text p {
  max-width: 560px;
  margin-top: 24px;

  color: #3f4852;

  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 8px;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 15px 32px;

  border-radius: 8px;

  font-family: "Hanken Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 700;

  text-decoration: none;

  transition: all 0.25s ease;
}

.primary-button {
  background: #00629d;
  color: white;

  box-shadow: 0 10px 20px -10px rgba(0, 98, 157, 0.5);
}

.primary-button:hover {
  background: #004f7e;
  transform: translateY(-2px);
}

.secondary-button {
  background: transparent;
  color: #00629d;
  border: 2px solid #00629d;
}

.secondary-button:hover {
  background: rgba(0, 98, 157, 0.05);
}

.hero-image-wrapper {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-glow {
  position: absolute;
  width: 80%;
  height: 80%;

  background: rgba(0, 98, 157, 0.1);

  border-radius: 50%;
  filter: blur(60px);

  z-index: 0;
}

.hero-image {
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 620px;

  aspect-ratio: 1 / 1;

  overflow: hidden;

  border: 4px solid white;
  border-radius: 24px;

  box-shadow: 0 25px 50px -20px rgba(17, 28, 44, 0.35);
}

.hero-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}

.decorative-bracket {
  position: absolute;
  z-index: 2;

  color: rgba(0, 98, 157, 0.08);

  font-family: monospace;
  font-size: 140px;
  line-height: 1;

  pointer-events: none;
}

.bracket-left {
  left: -35px;
  top: 10px;
}

.bracket-right {
  right: -35px;
  bottom: 0;
}

@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .hero-content {
    order: 2;
  }

  .hero-image-wrapper {
    order: 1;
  }

  .hero-text h1 {
    font-size: 48px;
  }

  .hero-image {
    max-width: 500px;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 50px 20px;
  }

  .hero-text h1 {
    font-size: 40px;
  }

  .hero-text p {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }
}
</style>
