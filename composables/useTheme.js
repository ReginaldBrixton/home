import { ref, watch } from 'vue'

export function useTheme() {
  const theme = ref(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('theme') || 'light'
      : 'light',
  )

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme.value)
    }
    updateTheme()
  }

  const updateTheme = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme.value)
    }
  }

  if (process.client) {
    watch(theme, updateTheme, { immediate: true })
  }

  return {
    theme,
    toggleTheme,
  }
}
