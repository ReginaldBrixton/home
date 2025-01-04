<script setup>
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="container mx-auto px-4 py-6 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white">
          Reginald Brixton
        </NuxtLink>
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="item in ['Home', 'Projects', 'About', 'Contact']"
            :key="item"
            :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
            class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            {{ item }}
          </NuxtLink>
          <button
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`"
            @click="toggleTheme"
          >
            <svg
              v-if="theme === 'light'"
              class="w-5 h-5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>
