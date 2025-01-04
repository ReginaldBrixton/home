<script setup>
definePageMeta({
  layout: 'default',
})

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with Vue 3 and Nuxt.',
    technologies: ['Vue', 'Nuxt', 'TailwindCSS'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative task management application.',
    technologies: ['Vue', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather visualization using modern APIs.',
    technologies: ['Vue', 'REST API', 'Chart.js'],
  },
]
</script>

<template>
  <div class="space-y-12">
    <section class="text-center">
      <h1 class="text-5xl font-bold text-gray-900">
        John Doe
      </h1>
      <p class="mt-4 text-xl text-gray-600">
        Full Stack Developer
      </p>
    </section>

    <section class="space-y-6">
      <h2 class="text-3xl font-semibold text-gray-800">
        About Me
      </h2>
      <p class="text-lg text-gray-600">
        I'm a passionate developer with 5 years of experience building modern web applications.
        Specialized in Vue.js, Node.js, and cloud technologies.
      </p>
    </section>

    <section class="space-y-6">
      <h2 class="text-3xl font-semibold text-gray-800">
        Featured Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BaseCard
          v-for="project in projects"
          :key="project.id"
        >
          <h3 class="text-xl font-semibold text-gray-800">
            {{ project.title }}
          </h3>
          <p class="mt-2 text-gray-600">
            {{ project.description }}
          </p>
          <div class="mt-4 flex gap-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-2 py-1 bg-gray-100 rounded text-sm text-gray-700"
            >
              {{ tech }}
            </span>
          </div>
        </BaseCard>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-3xl font-semibold text-gray-800">
        Contact
      </h2>
      <div class="flex justify-center gap-6">
        <a
          href="https://github.com"
          target="_blank"
          class="text-gray-600 hover:text-gray-900"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          class="text-gray-600 hover:text-gray-900"
        >
          LinkedIn
        </a>
        <a
          href="mailto:john@example.com"
          class="text-gray-600 hover:text-gray-900"
        >
          Email
        </a>
      </div>
    </section>
  </div>
</template>
