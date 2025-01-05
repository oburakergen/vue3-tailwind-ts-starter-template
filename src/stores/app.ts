import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAppStore = defineStore('app', () => {
  const appSetting = reactive({
    isDarkMode: false,
    menu: 'vertical',
    layout: 'full',
    rtlClass: 'ltr',
    animation: 'fade',
    navbar: 'navbar-sticky',
    locale: 'tr-TR',
    languageList: [
      { code: 'en-US', name: 'English' },
      { code: 'tr-TR', name: 'Turkish' },
    ],
  })

  return {
    appSetting,
  }
})
