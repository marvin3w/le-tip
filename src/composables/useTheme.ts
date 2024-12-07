// src/composables/useTheme.ts
import { ref, onMounted } from 'vue';

export function useTheme() {
  const storageKey = 'theme-preference';
  const theme = ref(getColorPreference());

  function getColorPreference(): 'light' | 'dark' {
    if (localStorage.getItem(storageKey)) {
      return localStorage.getItem(storageKey) as 'light' | 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function setPreference() {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
  }

  function reflectPreference() {
    document.documentElement.setAttribute('data-theme', theme.value);
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    setPreference();
  }

  onMounted(() => {
    reflectPreference();

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light';
        setPreference();
      });
  });

  return {
    theme,
    toggleTheme
  };
}
