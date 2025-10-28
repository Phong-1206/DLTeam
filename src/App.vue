<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
const {t} = useI18n();
const check_domain =  window.location;












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

<div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
</template>

<style scoped>
</style>
