import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const userName = ref('Conan')
  const theme = ref('dark')
  const itemsPerPage = ref(5)

  const updateUserName = (newName) => {
    userName.value = newName
  }

  const setTheme = (newTheme) => {
    theme.value = newTheme
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const setItemsPerPage = (count) => {
    itemsPerPage.value = parseInt(count)
  }

  return { 
    userName, 
    theme, 
    itemsPerPage, 
    updateUserName, 
    setTheme, 
    setItemsPerPage 
  }
})
