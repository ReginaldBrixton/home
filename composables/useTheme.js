import { ref, watch } from 'vue'

export function useTheme() {
  const theme = ref(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('theme') || 'light'
      : 'light'
  )

  function updateTheme() {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme.value)
    }
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme.value)
    }
    updateTheme()
  }

  watch(theme, updateTheme, { immediate: true })

  return {
    theme,
    toggleTheme
  }
}
