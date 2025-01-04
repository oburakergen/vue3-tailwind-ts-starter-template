import '@fontsource/source-sans-pro/600.css'
import '@fontsource/source-sans-pro/700.css'
import '@fontsource/source-sans-pro/900.css'
import '@fontsource-variable/open-sans'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import textFormatter from '@/plugins/textFormatter.ts'

import App from './App.vue'
import router from './router'
import i18n from '@/locales'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

// custom plugins
app.use(textFormatter)
// custom plugins

app.mount('#app')

app.config.performance = !import.meta.env.PROD
console.log(app.config, import.meta.env.PROD)

app.config.errorHandler = (err, vm, info) => {
  return window.location.replace('400.html?error=' + info)
}
