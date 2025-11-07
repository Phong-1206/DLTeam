<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { useI18n } from 'vue-i18n'
import { ref, reactive } from 'vue';
import { watch } from 'vue';
// import main from "../src/main"
const check_domain =  window.location;
const { t } = useI18n();






</script>




<template>

  <Header></Header>
<div style="padding-top: 50px;">
  <p>
    {{t('header_link_ref_trang_chu')}}
    Test {{ check_domain.pathname }}
  </p>
</div> 
  <RouterView />



<h1>{{ t("hi") }}</h1>
<div class="">
    <select id="language_input"   v-model="$i18n.locale" class="mt-2 block">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" class="">{{ locale }}</option>
    </select>

    
  </div>
  <button class="btn" id="btn_change">Change</button>

</template>

<script>


// // const button = document.getElementById("btn_change");
// // button.addEventListener("click", function() {
// //   //console.log(document.getElementById("language_input").value);
// //   console.log("ok");
// // });

//             document.addEventListener('DOMContentLoaded', function() {
//                 const element = document.querySelector('#btn_change');
//                 if (element) { // Always check if the element exists
//                     element.addEventListener('click', function() {
//                         // Your code here
//                         console.log(document.getElementById("language_input").value);
//                         if(document.getElementById("language_input").value == "vi") {
//                           document.getElementById("language_input").value = "en";
//                           console.log(document.getElementById("language_input").value);
//                         } else {
//                           document.getElementById("language_input").value = "vi";
//                           console.log(document.getElementById("language_input").value);
//                         }
//                     });
//                 }
//             });


</script>

<style scoped>
</style>
