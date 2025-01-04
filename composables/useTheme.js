import process from 'node:process'
import { ref, watch } from 'vue'

export function useTheme() {
  const theme = ref(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('theme') || 'light'
      : 'light',
  )

  const updateTheme = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme.value)
    }
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme.value)
    }
    updateTheme()
  }

  if (process.client) {
    watch(theme, updateTheme, { immediate: true })
  }

  return {
    theme,
    toggleTheme,
  }
}
