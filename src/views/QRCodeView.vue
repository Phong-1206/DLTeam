<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import QRCode from '@/components/QRCode.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Tạo QR Code Online Miễn Phí - DLTeam',
  meta: [
    {
      name: 'description',
      content: 'Tạo QR Code miễn phí với DLTeam. Hỗ trợ nhiều kiểu QR, tùy chỉnh màu sắc, chèn logo, thay đổi kích thước và tải về nhanh chóng, dễ sử dụng.'
    },
    {
      property: 'og:type',
      content: 'Website'
    },
    {
      property: 'og:title',
      content: 'Công cụ tạo QR Code miễn phí - DLTeam'
    },
    {
      property: 'og:description',
      content: 'DLTeam giúp bạn tạo QR Code miễn phí online với nhiều kiểu QR, tùy chỉnh màu sắc, chèn logo, thay đổi kích thước và tải về nhanh chóng, dễ sử dụng.'
    },
    {
      property: 'og:url',
      content: 'https://dlteam.io.vn/qr-code'
    },
    {
      property: 'og:image',
      content: '/public/images/icon_instagram.webp'
    },
    {
      property: 'og:site_name',
      content: 'DLTeam'
    }
  ]
})
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
<template>
    <Header></Header>
    <QRCode></QRCode>


</template>