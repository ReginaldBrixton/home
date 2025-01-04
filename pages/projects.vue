<script setup>
const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1',
    image: '/placeholder.jpg',
    tags: ['Vue', 'Nuxt', 'TailwindCSS'],
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2',
    image: '/placeholder.jpg',
    tags: ['JavaScript', 'Node.js'],
  },
  // Add more projects as needed
]
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
      Projects
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      >
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
