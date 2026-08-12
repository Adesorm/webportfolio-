<template>
  <section id="tools" class="tools-section">
    <div class="tools-container">

      <div class="tools-heading">
        <h2>Tools</h2>
      </div>

      <div class="tools-grid">

        <!-- Front End -->
        <div class="tool-group">
          <h3>Front End</h3>

          <div class="tool-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
              alt="HTML"
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
              alt="CSS"
            />

            <img
              src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png"
              alt="Bootstrap"
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="JavaScript"
            />
          </div>
        </div>

        <!-- MERN -->
        <div class="tool-group">
          <h3>MERN</h3>

          <div class="tool-icons">
            <img
              src="https://www.svgrepo.com/show/473729/mongodb.svg"
              alt="MongoDB"
            />

            <img
              src="https://btkpawqujqtivqwwpzhk.supabase.co/storage/v1/object/public/uploads/tools/1771682134403-849889495.webp"
              alt="Express"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
              alt="React"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/3840px-Node.js_logo.svg.png"
              alt="Node.js"
            />
          </div>
        </div>

        <!-- Other Tools -->
        <div class="tool-group">
          <h3>Other Tools</h3>

          <div class="tool-icons">
            <img
              src="https://images.icon-icons.com/2699/PNG/512/heroku_logo_icon_168126.png"
              alt="Heroku"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1280px-Git_icon.svg.png"
              alt="Git"
            />

            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
              alt="Postman"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPDDOjs-NRNNFRboOOlP0aELPnIilPCRo5Q&s"
              alt="Sublime Text"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.tools-section {
  padding: 90px 24px 120px;
  background: #f0f3ff;
}

.tools-container {
  width: min(1200px, 100%);
  margin: 0 auto;
}

.tools-heading {
  text-align: center;
  margin-bottom: 70px;
}

.tools-heading h2 {
  margin: 0;

  color: #244a64;

  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
}

.tool-group {
  text-align: center;
}

.tool-group h3 {
  margin: 0 0 40px;

  color: #00629d;

  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 600;
}

.tool-icons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 42px;

  max-width: 260px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
}

.tool-icons img {
  width: 64px;
  height: 64px;

  object-fit: contain;

  transition:
    transform 0.25s ease,
    filter 0.25s ease;
}

.tool-icons img:hover {
  transform: translateY(-5px) scale(1.08);
}

@media (max-width: 900px) {
  .tools-grid {
    grid-template-columns: 1fr;
    gap: 70px;
  }
}

@media (max-width: 600px) {
  .tools-section {
    padding: 70px 20px 90px;
  }

  .tools-heading h2 {
    font-size: 40px;
  }
}
</style>