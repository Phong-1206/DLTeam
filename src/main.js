import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import { onMounted, ref } from 'vue'
import vi from '../public/language/vi.json'
import en from '../public/language/en.json'
const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'vi',
  keySeparator: false,
   messages: {
    en,
    vi
  }
});

app.use(router)
app.use(i18n)
app.mount('#app')
