<script setup>
const skills = [
  { category: 'Frontend', items: ['Vue.js', 'React', 'TailwindCSS', 'JavaScript', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'SQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
]
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
      About Me
    </h1>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Hello! I'm Reginald Brixton, a passionate developer with a keen interest in creating
          elegant solutions to complex problems. With several years of experience in web development,
          I specialize in building modern, responsive, and user-friendly applications.
        </p>

        <p class="text-lg text-gray-700 dark:text-gray-300">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source
          projects, or sharing my knowledge through technical writing and mentoring.
        </p>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      Skills & Expertise
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="skillSet in skills"
        :key="skillSet.category"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {{ skillSet.category }}
        </h3>
        <ul class="space-y-2">
          <li
            v-for="skill in skillSet.items"
            :key="skill"
            class="flex items-center text-gray-700 dark:text-gray-300"
          >
            <svg
              class="w-5 h-5 text-green-500 mr-2"
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
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
