<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, reactive } from 'vue';
import { watch } from 'vue';
import { onMounted } from 'vue';
const check_domain =  window.location;
const { t } = useI18n();
const { locale } = useI18n();

onMounted(() => {
  if(localStorage.getItem("locale")) {
    locale.value = localStorage.getItem("locale");
  } else {
    localStorage.setItem("locale", locale.value);
  };
});
</script>

<template>
  <RouterView />
</template>

<script>
</script>

<style scoped>
</style>
