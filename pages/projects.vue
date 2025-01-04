<script setup>
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with Vue 3 and Nuxt.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3',
    tags: ['Vue', 'Nuxt', 'TailwindCSS'],
    link: 'https://github.com'
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task management application.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3',
    tags: ['Vue', 'Node.js', 'MongoDB'],
    link: 'https://github.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather visualization using modern APIs.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3',
    tags: ['Vue', 'REST API', 'Chart.js'],
    link: 'https://github.com'
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="relative mb-12">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Projects
      </h1>
      <div class="h-1 w-20 bg-blue-600" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
      >
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
