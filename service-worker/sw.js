import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'

// Skip waiting and take control immediately
globalThis.skipWaiting()
clientsClaim()

// Cache and serve precached assets
precacheAndRoute(globalThis.__WB_MANIFEST || [])
