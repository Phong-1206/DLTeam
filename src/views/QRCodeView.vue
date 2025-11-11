<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import QRCode from '@/components/QRCode.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
<template>
    <Header></Header>
    <QRCode></QRCode>


</template>