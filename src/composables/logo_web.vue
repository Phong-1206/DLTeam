<script setup>
import {ref, reactive} from "vue";

const icon_logo = ref(reactive({
  name: "DLTeam",
  logo:"https://flowbite.com/docs/images/logo.svg",
  url: "/"
}));
</script>
<template>
<a :href="icon_logo.url" class="flex items-center space-x-3 rtl:space-x-reverse">
    <img :src="icon_logo.logo" class="h-8" :alt="icon_logo.name + ' Logo'">
    <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">{{ icon_logo.name }}</span>
</a>
</template>