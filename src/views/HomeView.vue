<script setup>
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
//import Description from '../components/Description.vue';
import Footer from '../components/Footer.vue';
//import Contact from '../components/Contact.vue';
import Explore from '../components/Explore.vue';
import { useHead } from '@vueuse/head'

useHead({
  title: 'DLTeam – Nền tảng tiện ích & công cụ online cho mọi người',
  meta: [
    {
      name: 'description',
      content: 'DLTeam là nơi bạn có thể tải video mạng xã hội, tạo QR Code miễn phí, khám phá mã nguồn hay và sử dụng dịch vụ thiết kế website theo nhu cầu.'
    },
    {
      property: 'og:type',
      content: 'Website'
    },
    {
      property: 'og:title',
      content: 'DLTeam – Chia sẻ công cụ tiện ích online dành cho mọi người'
    },
    {
      property: 'og:description',
      content: 'Tải video mạng xã hội, tạo QR Code miễn phí, chia sẻ mã nguồn hay và nhiều công cụ tiện ích khác tại DLTeam.'
    },
    {
      property: 'og:url',
      content: 'https://dlteam.io.vn/'
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
</script>

<template>
  <main>
  <Header></Header>
  <Hero></Hero>
  <Explore></Explore>
  <Footer></Footer>
  </main>
</template>
