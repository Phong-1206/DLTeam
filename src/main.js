import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import { onMounted } from 'vue'

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    vi: {
      message: {
        hello: 'Xin Chào'
      }
    }
  }
});



app.use(router)
app.use(i18n)
app.mount('#app')

i18n.global.locale = 'en'