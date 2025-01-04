<script setup>
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

async function handleSubmit() {
  // Here you would typically handle the form submission
  // For now, we'll just console.log the form data
  console.log('Form submitted:', form)
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
      Contact Me
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Information -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>

        <div class="space-y-4">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:contact@reginald.dev" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              contact@reginald.dev
            </a>
          </div>

          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-gray-700 dark:text-gray-300">
              San Francisco, CA
            </span>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <form class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" @submit.prevent="handleSubmit">
        <div class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
