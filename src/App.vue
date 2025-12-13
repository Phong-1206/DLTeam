<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive, computed } from 'vue';
import { watch } from 'vue';
import { onMounted } from 'vue';
import { provide } from 'vue';
import { VOnboardingWrapper } from "v-onboarding";
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

const list_create_qr =[
    {
        name: "Url",
        type: ["url"],
        data: [
            [{placeholder:"https://example.com"}]
        ],
        icon: "icon_url.png"
    },
    {
        name: "Text",
        type: ["text"],
        data: [
            [{placeholder:"Nhập văn bản..."}]
        ],
        icon: "icon_text.png"
    },
    {
        name: "Email",
        type: ["email"],
        data: [
            [{placeholder:"example@email.com"}]
        ],
        icon: "icon_email.webp"
    },
    {
        name: "Phone",
        type: ["phone"],
        data: [
            [{placeholder:"0123456789"}]
        ],
        icon: "icon_phone.png"
    },
    {
        name: "Facebook",
        type: ["text"],
        data: [ 
            [{placeholder:"dev.ttp || https://example.com"}]
        ],
        icon: "icon_facebook.png"
    },
    {
        name: "Youtube",
        type: ["text"],
        data: [
            [{placeholder:"dev.ttp || https://example.com"}]
        ],
        icon: "icon_youtube.png"
    },
        {
        name: "Tiktok",
        type: ["text"],
        data: [
            [{placeholder:"dev.ttp || https://example.com"}]
        ],
        icon: "icon_tiktok.avif"
    },
    {
        name: "Instagram",
        type: ["text"],
        data: [
            [{placeholder:"dev.ttp || https://example.com"}]
        ],
        icon: "icon_instagram.webp"
    },
    {
        name: "Zalo",
        type: ["phone"],
        data: [
            [{placeholder:"dev.ttp || https://example.com || 0123456789"}]
        ],
        icon: "icon_zalo.webp"
    },
    {
        name: "Linkedin",
        type: ["text"],
        data: [
            [{placeholder:"dev.ttp || https://example.com"}]
        ],
        icon: "icon_linkedin.webp"
    },
        {
        name: "Spotifi",
        type: ["text"],
        data: [
            [{placeholder:"dev.ttp || https://example.com"}]
        ],
        icon: "icon_spotify.png"
    },
    {
        name: "X (Twitter)",
        type: ["text"],
        data: [
            [{placeholder:"dev.ttp || https://example.com"}]
        ],
        icon: "icon_x.png"
    },
    {
        name: "Discord",
        type: ["text"],
        data: [
            [{placeholder:"dev.ttp || https://example.com"}]
        ],
        icon: "icon_discord.png"
    },
    {
        name: "Telegram",
        type: ["text"],
        data: [
            [{placeholder:"dev.ttp || https://example.com"}]
        ],
        icon: "icon_telegram.png"
    }
]
//console.log(link_href_header.push(link_href_footer))

provide('link_header', link_href_header);
provide('list_qr', list_create_qr);
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
  <VOnboardingWrapper />
</template>

<script>
</script>

<style scoped>
</style>
