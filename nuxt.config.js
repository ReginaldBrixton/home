import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-04',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', '@vite-pwa/nuxt'],
  experimental: {
    emitRouteChunkError: false,
    inlineSSRStyles: false,
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  app: {
    head: {
      title: 'Reginald Brixton Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional portfolio showcasing my work and skills' },
        { name: 'theme-color', content: '#4f46e5' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'color-scheme', content: 'light dark' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg'],
    injectRegister: 'auto',
    strategies: 'injectManifest',
    srcDir: 'service-worker',
    filename: 'sw.js',
    workbox: {
      globDirectory: '.output/public',
      globPatterns: [
        '**/*.{js,css,html,png,svg,ico,woff,woff2}',
        '_nuxt/builds/meta/*.json',
      ],
      navigateFallback: '/',
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
      ],
    },
    manifest: {
      name: 'John Doe Portfolio',
      short_name: 'Portfolio',
      description: 'Professional portfolio showcasing my work and skills',
      theme_color: '#4f46e5',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      scope: '/',
      id: '/',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      screenshots: [
        {
          src: '/screenshot.png',
          sizes: '1920x1080',
          type: 'image/png',
          label: 'Portfolio Homepage',
          form_factor: 'wide',
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: 'module',
      navigateFallback: '/',
    },
  },
})
