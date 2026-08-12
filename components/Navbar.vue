<template>
  <header
    class="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/20"
  >
    <nav
      class="max-w-container-max-width mx-auto px-gutter h-20 flex items-center justify-between"
    >
      <!-- Logo -->
      <a
        href="#landing"
        class="flex items-center gap-3 text-on-surface hover:text-primary transition-colors"
      >
        <span
          class="material-symbols-outlined text-primary text-3xl"
        >
          code
        </span>

        <span
          class="font-headline-xl text-3xl font-extrabold tracking-tight"
        >
          MY PORTFOLIO
        </span>
      </a>

      <!-- Navigation -->
      <div class="hidden md:flex items-center gap-10">
        <a
          href="#landing"
          class="nav-link"
          :class="{ active: activeSection === 'landing' }"
        >
          Home
        </a>

        <a
          href="#projects"
          class="nav-link"
          :class="{ active: activeSection === 'projects' }"
        >
          My Projects
        </a>

        <a
          href="#tools"
          class="nav-link"
          :class="{ active: activeSection === 'tools' }"
        >
          Tools
        </a>

        <a
          href="#contact"
          class="contact-button"
        >
          Contact
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('landing')

const updateActiveSection = () => {
  const sections = document.querySelectorAll('section[id]')

  let current = 'landing'

  sections.forEach((section) => {
    const sectionTop = section.offsetTop

    if (window.scrollY >= sectionTop - 150) {
      current = section.id
    }
  })

  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.nav-link {
  position: relative;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #3f4852;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #00629d;
}

.nav-link.active {
  color: #00629d;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 2px;
  background: #00629d;
}

.contact-button {
  padding: 10px 28px;
  background: #00629d;
  color: white;
  border-radius: 9999px;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.2s ease;
}

.contact-button:hover {
  background: #004f7e;
  transform: translateY(-1px);
}
</style>