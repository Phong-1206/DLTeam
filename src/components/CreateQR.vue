<script setup>
import QRCodeVue3 from "qrcode-vue3";
import { watch } from "vue";
import { ref } from "vue";
import { nextTick } from "vue";
const props = defineProps({
    key_qr: Number,
    value_qr: String,
    image_qr: String,
    qrColor: String,
    qrColor_bg: String,
    edit_dot: Object,
});
const size_qr = 200; //// Kich Thuoc Qr
const duoi_file = ref("png");//// Dinh dang anh
const dlIsActive = ref(true); /// Trang thai Tai
const qrRef = ref(); //// Truyen Tham so


// watch([() => props.qrColor, () => props.qrColor_bg], ([new_color, new_color_br], [old_color, old_color_br]) => {
//   console.log('propA changed:', old_color, '->', new_color);
//   console.log('propB changed:', old_color_br, '->', new_color_br);
// })
///console.log(props.edit_dot)


</script>
<template>
    <div  class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:mb-6">QR - Code Trực Tiếp:</h2>
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
            <QRCodeVue3
                ref="qrRef"
                value="dev.ttp"
                :key="props.key_qr"
                :width="size_qr"
                :height="size_qr"
                :download="dlIsActive"
                downloadButton="hidden-download-btn"
                :fileExt="duoi_file"
                :downloadOptions="{ name: 'dlteam-qr', extension: duoi_file }"
                :image="'/public/images/'+props.image_qr"
                :dotsOptions="edit_dot" />

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
</template>
