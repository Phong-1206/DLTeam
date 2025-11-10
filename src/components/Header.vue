<script setup>
import { computed, reactive, ref, watch  } from 'vue';
import btn_change_language from '../composables/logo_web.vue';
import logo_web from "@/composables/logo_web.vue"
//import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
const { locale } = useI18n();
const { t } = useI18n();
const check_domain =  window.location;
const link_ref = [
  {
    name: "header_link_ref_trang_chu",
    url : "/"    
  },
  {
    name: "header_link_ref_tai_xuong",
    url: "/taixuong"
  },
  {
    name: "header_link_ref_qr_code",
    url: "/qr-code"
  }, 
  {
    name: "header_link_ref_tai_lieu",
    url: "/tailieu"
  }
];
const locales = ref(["en","vi"]); 


const setLanguage = (language) => {
  if (language == "vi"){
    locale.value = "en";
    localStorage.setItem("locale",locale.value);
  }else{
    locale.value = "vi";
    localStorage.setItem("locale",locale.value);
  }
};





const icon_logo = ref(reactive({
  name: "DLTeam",
  logo:"https://flowbite.com/docs/images/logo.svg",
  url: "/"

}));
const navstyle = ref(reactive({
  style_true: "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500",
  style_false: "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
}));
</script>


<template>
<header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 <logo_web></logo_web>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

      <button type="button" 
      v-for="items in locales" :key="items"
      :id="'btnsetlanguage'+items"
      @click="setLanguage(items)" 
      :class="locale == items ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : 'hidden'"
      >
        {{ items }}
  </button>


      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
      <li v-for="(items,index) in link_ref" :key="items.name">
        <a :href="items.url" 
        v-if="check_domain.pathname == items.url" 
        v-bind:class="navstyle.style_true" 
        aria-current="page">{{ t(items.name) }}</a>
        
        
        <a :href="items.url"
         v-else="check_domain.pathname == items.url" 
         v-bind:class="navstyle.style_false" 
         aria-current="page">{{ t(items.name) }}</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</header>
</template>
<script>
</script>
<style scoped></style>
