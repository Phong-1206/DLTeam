import './assets/main.css'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界'
      }
    }
  }
})


app.use(router)
app.use(i18n)
app.mount('#app')

i18n.global.locale = 'en'
