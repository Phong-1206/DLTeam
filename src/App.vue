<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { useI18n } from 'vue-i18n'
import { ref, reactive } from 'vue';
import { watch } from 'vue';
const check_domain =  window.location;
const { t } = useI18n();





</script>




<template>





  <Header></Header>
<div style="padding-top: 50px;">
  <p>
    Test {{ check_domain.pathname }}
  </p>
</div> 
  <RouterView />
<p>{{ $t('message.hello', { msg: 'hello' }) }}</p>
 <h1>{{ t("message.hello") }}</h1>
<div class="">
    <select v-model="$i18n.locale" class="mt-2 block">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" class="">{{ locale }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return { locales: ["vi", "en"] };
  },
  methods: {
    updateLanguage() {
      localStorage.setItem("locale", this.$i18n.locale);
    },
  },
  mounted() {
    if (localStorage.getItem("locale")) {
      this.$i18n.locale = localStorage.getItem("locale");
    } else {
      localStorage.setItem("locale", this.$i18n.locale);
    }
  },
};
</script>

<style scoped>
</style>
