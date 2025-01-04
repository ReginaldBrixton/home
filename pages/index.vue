<script setup>
import { useTheme } from '~/composables/useTheme'

const { theme, toggleTheme } = useTheme()

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="space-y-16 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center text-center">
      <div class="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3"
          class="w-full h-full object-cover opacity-10"
          alt="Background"
        >
      </div>
      <div class="space-y-6 px-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
          class="w-32 h-32 rounded-full mx-auto shadow-lg"
          alt="Profile"
        >
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white">
          John Doe
        </h1>
        <p class="text-2xl text-gray-600 dark:text-gray-300">
          Full Stack Developer
        </p>
        <div class="flex justify-center gap-4">
          <NuxtLink
            to="/projects"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Contact Me
          </NuxtLink>
          <button
            @click="toggleTheme"
            class="p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {{ theme === 'light' ? '🌙' : '☀️' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Brief Introduction -->
    <section class="container mx-auto px-4 max-w-3xl text-center">
      <p class="text-xl text-gray-600 dark:text-gray-300">
        I'm a passionate developer with 5 years of experience building modern web applications.
        Specialized in Vue.js, Node.js, and cloud technologies.
      </p>
      <div class="mt-8 flex justify-center gap-8">
        <NuxtLink
          to="/about"
          class="text-blue-600 hover:text-blue-700 font-medium"
        >
          Learn more about me →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
