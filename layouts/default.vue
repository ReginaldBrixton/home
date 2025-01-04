<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-6">
        <NuxtLink to="/" class="text-xl font-bold text-gray-900">Your App</NuxtLink>
      </nav>
    </header>
    
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
// Layout component logic here if needed
</script> 