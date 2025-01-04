<script setup>
const skills = [
  {
    category: 'Frontend',
    items: ['Vue.js', 'React', 'TailwindCSS', 'JavaScript', 'HTML/CSS'],
    icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'SQL'],
    icon: 'M21.7 18.6V6.4c0-.5-.3-1-.8-1.2l-9-4.5c-.3-.1-.6-.1-.9 0l-9 4.5c-.5.2-.8.7-.8 1.2v12.2c0 .5.3 1 .8 1.2l9 4.5c.1.1.3.1.4.1.2 0 .3 0 .4-.1l9-4.5c.6-.2.9-.7.9-1.2z',
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'VS Code', 'Figma'],
    icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z',
  },
]
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <div class="relative mb-12">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        About Me
      </h1>
      <div class="h-1 w-20 bg-indigo-600 dark:bg-indigo-500" />
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <img
          src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
          alt="Reginald Brixton"
          class="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700"
        >
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Hello! I'm Reginald Brixton, a passionate developer with a keen interest in creating
            elegant solutions to complex problems. With several years of experience in web development,
            I specialize in building modern, responsive, and user-friendly applications.
          </p>

          <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through technical writing and mentoring.
          </p>
        </div>
      </div>
    </div>

    <div class="relative mb-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
        <span>Skills & Expertise</span>
        <div class="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="skillSet in skills"
        :key="skillSet.category"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
      >
        <!-- Background Pattern -->
        <img
          src="https://www.transparenttextures.com/patterns/cubes.png"
          alt=""
          class="absolute inset-0 opacity-5 dark:opacity-10 object-cover"
        >

        <div class="relative">
          <div class="flex items-center gap-4 mb-6">
            <div class="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
              <svg
                class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="skillSet.icon"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ skillSet.category }}
            </h3>
          </div>
          <ul class="space-y-3">
            <li
              v-for="skill in skillSet.items"
              :key="skill"
              class="flex items-center text-gray-700 dark:text-gray-300 text-lg group"
            >
              <svg
                class="w-5 h-5 text-green-500 dark:text-green-400 mr-3 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                {{ skill }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
