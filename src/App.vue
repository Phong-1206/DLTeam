<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive, computed } from 'vue';
import { watch } from 'vue';
import { onMounted } from 'vue';
import { provide } from 'vue';
/////// SET NGÔN NGỮ /////
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { locale } = useI18n();
/////////////////////////
const check_domain =  window.location;
const link_href_header = [
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
const link_href_footer = [
  {
    name: "header_link_ref_dieu_khoang",
    url: "/dieukhoan"
  },
  {
    name: "header_link_ref_chinh_sach",
    url: "/chinhsach"
  }
]
//console.log(link_href_header.push(link_href_footer))

provide('link_header', link_href_header);
//provide("link_footer", link_href_footer_2)
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
