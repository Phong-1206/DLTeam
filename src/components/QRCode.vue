<script setup>
import { onMounted, watchEffect } from 'vue'
import { initFlowbite } from 'flowbite'
import {ref,reactive} from "vue";
import {watch} from "vue";
import { inject } from 'vue';
//import Qrcode from "vue-qrcode";
//import QRCode from "qrcode";
import QRCodeVue3 from "qrcode-vue3";
import { nextTick } from "vue";
const test = ref("");
onMounted(() => {
    initFlowbite();
    watch(test, (newValue, oldValue) => {
        console.log( newValue+ " oldValue: "+ oldValue);
})
});
const list_create_qr = inject('list_qr');

const class_active = ref("");
const input_active = ref({
    type: "",
    placeholder: "",
    images: ""
});
const test_click = (items) => {
    class_active.value = items.name;
    input_active.value.type = items.type[0];
    input_active.value.placeholder = items.data[0][0];
    input_active.value.images = items.icon;
    console.log(items.data[0][0]);

};
const qrRef = ref();
const src_url_qr = ref("");
const size_qr = 200;
const duoi_file = ref("png");
const dlIsActive = ref(true);
const DownloadPNG = async () => {
    // dlIsActive.value = !dlIsActive.value;
    await nextTick();
    const btn = qrRef.value?.$el.querySelector(".hidden-download-btn");
  if (!btn) return alert("Đã xảy ra lỗi trong quá trình tạo QR, bạn có thể báo lại cho admin nhé!");

  btn.click(); 
};
</script>
<template>
<div class="bg-white py-12 sm:py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-balance">Tạo QR - Code Miễn Phí</h1>
      <!--<p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">Tinh nang DLTeam</p>
    -->
      <p class="mt-4 text-lg/8 text-gray-700">
        Tạo mã QR miễn phí, nhanh và an toàn với DLTeam – hỗ trợ liên kết, văn bản, Wi-Fi, danh thiếp và nhiều hơn nữa.
      </p>
    </div>
    
<div class="mt-6 w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <!-- <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select tab</label>
        <select id="tabs" class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Cơ bản</option>
            <option>Nâng cao</option>
        </select>
    </div> -->
    <ul class=" text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
        <li class="w-full">
            <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Cơ bản</button>
        </li>
        <li class="w-full">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Nâng cao</button>
        </li>
    </ul>
<div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
    <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6" id="dataTypeGrid">




            <div 
            v-for="items in list_create_qr" 
            :key="items.name"
            class="data-card card-bg p-4 rounded-xl border-2 border-gray-200 text-sm font-medium text-gray-700 text-center dark:text-gray-300 hover:bg-indigo-600 hover:text-white" 
            :class="class_active == items.name ? 'active-card':'noactive-card'"
            @click="test_click(items)">
                    <div class="flex text-4xl mb-2 items-center justify-center">
                        <img class="w-15 h-15 rounded-full" :src="'/public/images/'+items.icon"></img>
                    </div>
                    {{ items.name }}
            </div>

        </div>
    <div :class="!class_active? 'hidden': ''" class="block">
        <div >
        <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{{class_active}}</label>
           <!-- class="bg-gray-50 border w-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  -->

        <input 
        :type="input_active.type" 
        class="bg-gray-50 border w-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :placeholder="input_active.placeholder.placeholder"
        v-model="src_url_qr"
        />
        <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
        
        </div>
        
        <!--class="!input_user?'hidden' : ''"-->
        <div  class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:mb-6" data-i18n="qr_preview">QR - Code Trực Tiếp:</h2>
            <div class="max-w mx-auto pb-8">
                <label for="format_img" class="block mb-2.5 text-sm font-medium text-heading">Định dạng QR: </label>
                <select id="format_img" 
                style="border-radius: 10px;"
                v-model="duoi_file" class="block w-full bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs text-fg-disabled">
                    <option value="png">PNG</option>
                    <option value="jpg">JPG</option>
                    <option value="svg">SVG</option>
                    <option value="pdf">PDF</option>
                </select>
            </div>
            

                <div class="flex card-bg rounded-xl p-4 md:p-6 border border-gray-200 mb-6 items-center justify-center">
                    <!-- <img :src="qrData" alt="QR Code" class="qr_code" /> -->
                    
                    <QRCodeVue3 
                    ref="qrRef"
                    :value="src_url_qr"
                    :key="src_url_qr"
            :width="200"
            :height="200"
             :download="dlIsActive"
             downloadButton="hidden-download-btn"
      :fileExt="duoi_file"
      :downloadOptions="{ name: 'my-qr', extension: duoi_file }"
            :image="'/public/images/'+input_active.images"
            :dotsOptions="{
/*
//////////NÂNG CAO THAY ĐỔI /////////

type: square, rounded, extra-rounded, classy, classy-rounded
color: mã màu




*/
                type: 'square',  
                color: '#000000', // Màu xanh lá cây đặc trưng của Vue
            }" />

          <!--
          
          
          
          -->
                </div>
                <div id="downloadSection" class=" card-bg rounded-xl p-4 md:p-6 border border-gray-200">
                    <p class="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center mb-4" data-i18n="export_format">Tải về máy của bạn</p>
                    <div class="flex justify-center items-center">
                        <button @click="DownloadPNG" class="w-max p-20 bg-gradient-to-r bg-blue-700  hover:bg-blue-900S text-white font-bold py-4 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg flex flex-col items-center gap-2">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <span>Tải về máy.</span>
                        </button>
                    </div>
                </div>
            </div>
    </div>



    </div>


        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            
            <div id="tab-customize" class="tab-content">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:mb-6" data-i18n="customize_qr">Customize QR appearance</h2>
                
                <div class="space-y-6">
                    <!-- QR Style & Colors -->
                    <div class="space-y-6">
                        <div class="card-bg rounded-xl p-4 md:p-6 border border-gray-200">
                            <p class="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                                <span>🎨</span>
                                <span data-i18n="qr_colors">QR Code Colors:</span>
                            </p>
                            
                            <div class="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label class="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2 block" data-i18n="qr_color">QR Color:</label>
                                    <input type="color" id="qrColorDark" value="#000000" class="w-full h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer">
                                </div>
                                <div>
                                    <label class="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2 block" data-i18n="bg_color">Background Color:</label>
                                    <input type="color" id="qrColorLight" value="#ffffff" class="w-full h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer">
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2" data-i18n="color_warning">⚠️ Note: Use high contrast colors (black/white) for best scanability. Light or similar colors may reduce scanning ability.</p>
                        </div>

                        <!-- QR Size -->
                        <div class="card-bg rounded-xl p-4 md:p-6 border border-gray-200">
                            <p class="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                                <span>📏</span>
                                <span data-i18n="qr_size">QR Code Size:</span>
                            </p>
                            
                            <div class="space-y-3">
                                <label class="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2 block" data-i18n="qr_size_input">Enter size (px):</label>
                                <div class="flex items-center gap-3">
                                    <input type="number" id="qrSize" min="100" max="1000" value="300" class="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all input-bg">
                                    <span class="text-sm text-gray-500 dark:text-gray-400">px</span>
                                </div>
                                <p class="text-xs text-gray-500 dark:text-gray-400" data-i18n="qr_size_hint">Recommended: 200-500px for web, 300-800px for print</p>
                            </div>
                        </div>

                        <!-- Center Customization -->
                        <div class="card-bg rounded-xl p-4 md:p-6 border border-gray-200">
                            <p class="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-4" data-i18n="customize_center">Customize center:</p>
                            
                            <div class="space-y-3">
                                <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
                                    <input type="radio" name="centerOption" value="logo" class="mr-3 w-4 h-4 text-indigo-600">
                                    <div class="flex-1">
                                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-i18n="add_logo">📷 Add Logo</span>
                                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1" data-i18n="add_logo_hint">Tip: Square image (1:1), minimum 200x200px, transparent background recommended</p>
                                    </div>
                                </label>
                                <input type="file" id="logoFile" accept="image/*" class="w-full px-4 py-3 border-2 input-bg rounded-xl transition-all" disabled="">

                                <div id="logoPreview" class="hidden mt-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"></div>
                                <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
                                    <input type="radio" name="centerOption" value="text" class="mr-3 w-4 h-4 text-indigo-600">
                                    <div class="flex-1">
                                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-i18n="add_text">✏️ Add Text</span>
                                    </div>
                                </label>
                                <input type="text" id="centerText" data-i18n-placeholder="enter_text" class="w-full px-4 py-3 border-2 input-bg rounded-xl transition-all mb-2" disabled="" placeholder="Enter text...">
                                <div class="flex items-center gap-3">
                                    <label class="text-sm text-gray-600 dark:text-gray-400 font-medium" data-i18n="text_color">Text color:</label>
                                    <input type="color" id="centerTextColor" value="#000000" class="h-10 w-24 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer" disabled="">
                                </div>

                                <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
                                    <input type="radio" name="centerOption" value="none" class="mr-3 w-4 h-4 text-indigo-600" checked="">
                                    <div class="flex-1">
                                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-i18n="none">None</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Campaign Tracking -->
                        <div id="campaignSection" class="card-bg rounded-xl p-4 md:p-6 border border-gray-200">
                            <label class="flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" id="enableCampaign" class="mr-3 w-4 h-4 text-indigo-600 rounded">
                                <div>
                                    <span class="text-sm font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                        <span>📊</span>
                                        <span data-i18n="campaign_title">Google Campaign Tracking</span>
                                    </span>
                                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1" data-i18n="campaign_desc">Add UTM parameters</p>
                                </div>
                            </label>
                            <div id="campaignFields" class="space-y-3 hidden">
                                <input type="text" id="utmSource" placeholder="📌 Campaign Source (utm_source)" class="w-full px-4 py-3 border-2 input-bg rounded-xl">
                                <input type="text" id="utmMedium" placeholder="🔗 Campaign Medium (utm_medium)" class="w-full px-4 py-3 border-2 input-bg rounded-xl">
                                <input type="text" id="utmCampaign" placeholder="🎯 Campaign Name (utm_campaign)" class="w-full px-4 py-3 border-2 input-bg rounded-xl">
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>
</div>
  </div>
</div>
</template>
<style lang="css">
.active-card{
    border-color: rgb(42, 21, 199) ;
}
.noactive-card{
    border-color: none;
}
.hidden-download-btn {
  display: none !important;
}
</style>