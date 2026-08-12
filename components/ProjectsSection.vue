<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">

      <!-- Section Heading -->
      <div class="projects-heading">
        <span>// FEATURED WORK</span>
        <h2>My Projects</h2>
      </div>

      <!-- Project Cards -->
      <div class="projects-grid">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <div class="project-image">
            <img
              :src="project.image"
              :alt="project.title"
            />

            <span class="project-category">
              {{ project.category }}
            </span>
          </div>

          <div class="project-content">
            <h3>{{ project.title }}</h3>

            <p>{{ project.description }}</p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'E-Commerce API Documentation',
    category: 'ANALYTICS',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEeld6rTWlF7OdkZPIV-kBM1AAgLvdaU54HGVHvWD67StJhCQ8sq0XkUsAFIrDLRKaZLIMGGl7-q7_jv5HaZki-1g_IgNDynTYU4h1m8uhTw4nC39lqjabLfbfoATNcc_3sTRgeLrsv_HIyBTeTZh4ojzSdNy5kaQh3pU20jG70RF8HpJs53kFcfXlLnTgs9JQmzgtK8ncP2HOfRGfYOYi9cc5kxmPi8uoo94E2scS0sOXIM89zTxu-gLJdtKjdjPoHGs2LphcsYE',
    description:
      'Dynamic E-Commerce Workflow Management. The system features dynamic routes for order processing, real-time inventory updates, and secure user authentication. It also supports seamless automated order reporting and comprehensive product management. Documented Backend API published publicly using Postman.'
  },
  {
    title: 'Course Booking API Documentation',
    category: 'E-COMMERCE',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAHhm7-X3RzxTMjymFtM4iPIEWG-NEiYGJYNrKSZWtxAGUQaq0LMcDE3LrsMeKMUZjvPWv_PLtiBTEKBbul50AeSs7cmjXQTlFei2yyQrnH2u_cnR6f3cMazhVgiInkA1J1CCZAvPURPPk3jnw3pLwBdhDXrXAlH4IOBhR4h6rl4Ge-5YYa0XCibq0UHxYAXoXnFt0ztn2c3QewCijRxcF4Y_2HQeDk7PFRC2-g6VMyZDoPaIEJ-aVs4rfahpsJC3XKhiZOB-jsyY',
    description:
      'RESTful API for managing course enrollments, featuring user registration, authentication and retrieval of user details. Supports course creation, updates, archiving, activation, and student enrollment. Publicly documented using Postman.'
  },
  {
    title: 'Course Booking App',
    category: 'SAAS',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD96qfde9iHwXGab8PkiX5DMjN7a94-XrJRvA8XcnH163lCTWSVTMS-AuGK8SuGsYfrIImCDLpiyRjMyJvmjFpgSTMJ7M40G0ngRgfbHraukj119lOGlvWkC-eGkyW0t-uqze9v11q8LgrRXDY9QJavuTx3TfKTackI7kCGAwNnpqWf-fko23WoJJprkJ_xrA8h-rqVnwYBgEirVVSO7ziXQABMgu4nM2wpxtrXDquSB1o63IQjVYPMQQBaI0sPas4CdIfjZ988Kko',
    description:
      'A MERN-stack course enrollment system featuring user registration, authentication, and profile management. Authenticated users can create, update, archive, and activate courses. The platform also allows users to browse available courses and enroll seamlessly.'
  },
  {
    title: 'Short Courses Capstone',
    category: 'COURSES',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg',
    description:
      'Place holder for your courses capstone project.'
  },
  {
    title: 'Short Courses Capstone',
    category: 'COURSES',
    image:
      'https://cdn-icons-png.flaticon.com/512/1688/1688400.png',
    description:
      'Place holder for your courses capstone project.'
  },
  {
    title: 'Short Courses Capstone',
    category: 'COURSES',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTib6_8PibeU7eJVXhe08Qsoyik6JHcPRcyKw&s',
    description:
      'Place holder for your courses capstone project.'
  }
]
</script>

<style scoped>
.projects-section {
  padding: 100px 24px 120px;
  background: #ffffff;
}

.projects-container {
  width: min(1200px, 100%);
  margin: 0 auto;
}

.projects-heading {
  text-align: center;
  margin-bottom: 70px;
}

.projects-heading span {
  display: block;
  margin-bottom: 18px;

  color: #00629d;

  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.12em;
}

.projects-heading h2 {
  margin: 0;

  color: #111c2c;

  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.project-card {
  overflow: hidden;

  background: #f0f3ff;

  border: 1px solid rgba(190, 199, 212, 0.35);
  border-radius: 12px;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);

  border-color: rgba(0, 98, 157, 0.3);

  box-shadow: 0 20px 40px -20px rgba(17, 28, 44, 0.3);
}

.project-image {
  position: relative;

  width: 100%;
  height: 215px;

  overflow: hidden;

  background: #d8e3fa;
}

.project-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition: transform 0.6s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.04);
}

.project-category {
  position: absolute;
  top: 16px;
  left: 16px;

  padding: 6px 12px;

  border-radius: 999px;

  background: #00629d;
  color: #ffffff;

  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.03em;
}

.project-content {
  min-height: 300px;

  padding: 32px;
}

.project-content h3 {
  margin: 0 0 18px;

  color: #111c2c;

  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 26px;
  line-height: 1.25;
  font-weight: 700;
}

.project-content p {
  margin: 0;

  color: #3f4852;

  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 16px;
  line-height: 1.55;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-section {
    padding: 70px 20px 90px;
  }

  .projects-heading h2 {
    font-size: 38px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-content {
    min-height: auto;
  }
}
</style>