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
import CreateQR from './CreateQR.vue';
import label from 'daisyui/components/label';
import { VOnboardingWrapper } from "v-onboarding";
import "v-onboarding/dist/style.css";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const test = ref("");
const qrColor = ref()
const qrColor_bg = ref()
const dots_type = ref("square")
const name_type = ref("Cổ điển")
const refKey = ref(0);
const src_url_qr = ref("");
const tap_onl = ref();
const size_qr = ref(200); //// Kich Thuoc Qr
//const file_img = ref();
//const dinh_dang_qr = ref("png")
const duoi_file = ref("png");//// Dinh dang anh
const logo = ref(null)
const dlIsActive = ref(true); /// Trang thai Tai
const qrRef = ref(); //// Truyen Tham so
const image_qr = ref(false)
const ip_image = ref("false")


const edit_dot = ref({
    type: "square",
    color: "#000",
//     gradient: {
//   //type: "linear",
//   //rotation: Math.PI / 4,
//   colorStops: [
//     { offset: 0, color: "#4facfe" },
//     { offset: 1, color: "#7366ff" }
//   ]
// }
});

const dots_coban = ref({type: 'square',color: '#000'});

const dots_nangcao =  ref({
    type: "square",
    color: "#000",
})

const backgroundOptions_edit = ref({
    color: "#fff"
    });

const tab_active = (active) => {
    tap_onl.value = active
};
onMounted(() => {
    initFlowbite();
    wrapper.value.start();
    watch(src_url_qr, (newValue, oldValue) => {
        console.log( newValue+ " oldValue: "+ oldValue);
        refKey.value++;
   })
    watch(tap_onl, (newValue) => {
        if(newValue){
            edit_dot.value = dots_coban.value
            //console.log("tap co ban")
        }else {
            edit_dot.value = dots_nangcao.value
            wrapper2.value.start();
            //console.log("tap nang cao")
        }
   })
   watch(qrColor, (newValue) => {
        //console.log( newValue+ " oldValue: "+ oldValue);
        dots_nangcao.value.color = newValue
        refKey.value++;
   })
    watch(qrColor_bg, (newValue) => {
        backgroundOptions_edit.value.color = newValue
        refKey.value++;
   })
   watch(dots_type, (newValue) => {
        dots_nangcao.value.type = newValue
        if(dots_nangcao.value.type == "square"){
            name_type.value = "Cổ điển"
        }else if(dots_nangcao.value.type == "dots"){
            name_type.value = "Hiện đại"
        }else if(dots_nangcao.value.type == "rounded"){
            name_type.value = "Bo góc"
        }else if(dots_nangcao.value.type == "classy"){
            name_type.value = "Giọt nước"
        }else if(dots_nangcao.value.type == "classy-rounded"){
            name_type.value = "Giọt bo tròn"
        }else {
            name_type.value = "Bo tròn mạnh"
        }
        console.log()
        refKey.value++;
   })
   watch(size_qr, (newValue) => {
        size_qr.value = newValue
        refKey.value++;
    })
//
    watch(ip_image, (newValue) => {
        //image_qr.value = newValue
        
        //refKey.value++;
        if (newValue == "false"){
            image_qr.value = false
        }else{
            image_qr.value = input_active.value.images
        }
        refKey.value++;
    })

    watch(logo, (newValue) => {
        //file_img.value = newValue
        image_qr.value = newValue
        refKey.value++;
        //console.log("File: "+newValue)
    })

    // watch(image_qr, (newValue) => {
    //     //file_img.value = newValue
    //     //image_qr.value = newValue
    //     console.log("Url: "+newValue)
    // })

});
const list_create_qr = inject('list_qr');

const class_active = ref("");
const input_active = ref({
    type: "",
    placeholder: "",
    images: ""
});

// watch(refKey,(newValue) => {
//     console.log(newValue);
// })

const file_img = (e) =>{
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
  logo.value = event.target.result; // Base64
  };
  reader.readAsDataURL(file);

};

const test_click = (items) => {
    class_active.value = items.name;
    input_active.value.type = items.type[0];
    input_active.value.placeholder = items.data[0][0];
    input_active.value.images = '/public/images/'+items.icon;
    console.log(items.data[0][0]);
    refKey.value++;

};

const change_type = (items) => {
    dots_nangcao.value.type = items
    dots_type.value = items
    ///console.log(items);
};

const DownloadPNG = async () => {
    // dlIsActive.value = !dlIsActive.value;
    await nextTick();
    const btn = qrRef.value?.$el.querySelector(".hidden-download-btn");
  if (!btn) return alert("Đã xảy ra lỗi trong quá trình tạo QR, bạn có thể báo lại cho admin nhé!");

  btn.click();
};

const list_type_qr = ref([
    {
        type:"square",
        name_type: "Cổ điển",
        url_img: "type_co_dien"
    },
    {
        type:"dots",
        name_type: "Hiện đại",
        url_img: "type_hien_dai"
    },
    {
        type:"rounded",
        name_type: "Bo góc",
        url_img: "type_bo_goc"
    },
    {
        type:"classy",
        name_type: "Giọt nước",
        url_img: "type_giot_nuoc"
    },
    {
        type:"classy-rounded",
        name_type: "Giọt bo tròn",
        url_img: "type_giot_bo_tron"
    },
    {
        type:"extra-rounded",
        name_type: "Bo tròn mạnh",
        url_img: "type_bo_tron_manh"
    }
])




const wrapper = ref(null);
const currentStep = ref(0);

const wrapper2 = ref(null);
const currentStep2 = ref(0);
const onboardingOptions = {
  labels: {
    next: "Tiếp tục",
    previous: "Quay lại",
    finish: "Hoàn tất",
    skip: "Bỏ qua"
  }
}
const steps = [
  {
    attachTo: { element: '.step_coban_1', on: 'bottom' },
    content: {
      title: 'Bước 1',
      description: 'Đây là trang cơ bản, nơi bạn có thể tạo QR Code đơn giản, nhanh chóng.'
    }
  },
  {
    attachTo: { element: '.step_coban_2', on: 'bottom' },
    content: {
      title: 'Bước 2',
      description: 'Đây là trang nâng cao, bạn có thể tùy chỉnh QR Code theo phong cách cá nhân của bạn.'
    }
  },
  {
    attachTo: { element: '.step_coban_3', on: 'top' },
    content: {
      title: 'Bước 3',
      description: 'Đây là bước bạn chọn kiểu dữ liệu bạn nhập vào. '
    }
  },
  {
    attachTo: { element: '.step_coban_4', on: 'top' },
    content: {
      title: 'Bước 4',
      description: 'Bạn dữ liệu cần tạo ra QR Code tại đây'
    }
  },
  {
    attachTo: { element: '.step_coban_5', on: 'top' },
    content: {
      title: 'Bước 5',
      description: 'QR Code bạn tạo sẽ được hiện trực tiếp tại đây.'
    }
  },
  {
    attachTo: { element: '.step_coban_6', on: 'top' },
    content: {
      title: 'Bước 6',
      description: 'Đây là nút lưu QR Code bạn tạo về thư viện điện thoại.'
    }
  }
];

const steps2 = [
  {
    attachTo: { element: '.step_coban_2', on: 'bottom' },
    content: {
      title: 'Bước 1',
      description: 'Đây là trang nâng cao, bạn có thể tùy chỉnh QR Code theo phong cách cá nhân của bạn.'
    }
  },
    {
    attachTo: { element: '.step_nangcao_1', on: 'bottom' },
    content: {
      title: 'Bước 2',
      description: 'Đây là bước thay đổi kiểu QR Code, bạn hẫy lựa chọn kiểu QR phù hợp với phong cách.'
    }
  },
  {
    attachTo: { element: '.step_nangcao_2', on: 'top' },
    content: {
      title: 'Bước 3',
      description: 'Đây là bước thay đổi màu sắc QR Code, bạn có thể thay đổi màu của QR và màu nền của mình.'
    }
  },
  {
    attachTo: { element: '.step_nangcao_3', on: 'top' },
    content: {
      title: 'Bước 4',
      description: 'Đây là bước thêm ảnh, logo QR Code, bạn có thể thêm ảnh của QR tạo cá tính, cá nhân hóa chủ sở hữu QR.'
    }
  },
  {
    attachTo: { element: '.step_nangcao_4', on: 'top' },
    content: {
      title: 'Bước 5',
      description: 'Đây là bước thay đổi kích thước QR Code, lựa chọn kích thước phù hợp với công việc bạn sử dụng QR.'
    }
  },
  {
    attachTo: { element: '.step_nangcao_5', on: 'top' },
    content: {
      title: 'Bước 6',
      description: 'Đây là bước thay đổi định dạng file QR Code, DLTeam hỗ trợ các định dạng phổ biến bạn có thể sử dụng ngay lập tức'
    }
  },
  {
    attachTo: { element: '.step_nangcao_6', on: 'top' },
    content: {
      title: 'Bước 7',
      description: 'QR Code bạn tạo sẽ được hiện trực tiếp tại đây.'
    }
  },
  {
    attachTo: { element: '.step_nangcao_7', on: 'top' },
    content: {
      title: 'Bước 8',
      description: 'Đây là nút lưu QR Code bạn tạo về thư viện điện thoại.'
    }
  }
];


</script>
<template>
<div class="bg-white py-12 sm:py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="mt-2 text-4xl font-bold tracking-tight text-pretty text-blue-600 sm:text-4xl lg:text-balance">{{ t("qrcode_title") }}</h1>
      <!--<p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">Tinh nang DLTeam</p>
    -->
      <p class="mt-4 text-lg/8 text-gray-700">
        {{ t("qrcode_describe") }}
      </p>
    </div>
    <div class="mt-6 w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <ul class=" text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
            <li class="w-full">
                <button @click="tab_active(true)" id="coban-tab" data-tabs-target="#coban" type="button" role="tab" aria-controls="coban" aria-selected="true" class="step_coban_1 inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">{{ t("qrcode_coban") }}</button>
            </li>
            <li class="w-full">
                <button @click="tab_active(false)" id="nangcao-tab" data-tabs-target="#nangcao" type="button" role="tab" aria-controls="nangcao" aria-selected="false" class="step_coban_2 inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">{{ t("qrcode_nangcao") }}</button>
            </li>
        </ul>
    <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
    
    
    <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="coban" role="tabpanel" aria-labelledby="coban-tab">
        <div class="step_coban_3 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
            <div
            v-for="items in list_create_qr"
            :key="items.name"
            class="data-card card-bg p-4 rounded-xl border-2 border-gray-200 text-sm font-medium text-gray-700 text-center dark:text-gray-300 hover:bg-indigo-600 hover:text-white"
            :class="class_active == items.name ? 'active-card':'noactive-card'"
            @click="test_click(items)">
                    <div class="flex text-4xl mb-2 items-center justify-center">
                        <img loading="lazy" class="w-15 h-15 rounded-full" :src="'/public/images/'+items.icon"></img>
                    </div>
                    {{ items.name }}
            </div>
        </div>
        <!--:class="!class_active? 'hidden': ''"-->
    <div class="block">
        <div>
        <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{{class_active}}</label>
        <input
        :type="input_active.type"
        class="step_coban_4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :placeholder="input_active.placeholder.placeholder" placeholder="Nhập tại đây"
        v-model="src_url_qr"
        />
        <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ t("qrcode_chinh_sach") }}<a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">{{ t("header_link_ref_dieu_khoang") }}</a>.</p>
        </div>
        <!-- <CreateQR :key_qr="refKey" :value_qr="src_url_qr" :image_qr="input_active.images"></CreateQR> -->
         <!-- <QRCodeVue3
                ref="qrRef"
                :value="src_url_qr"
                :key="refKey"
                :width="size_qr"
                :height="size_qr"
                :download="dlIsActive"
                downloadButton="hidden-download-btn"
                :fileExt="duoi_file"
                :downloadOptions="{ name: 'dlteam-qr', extension: duoi_file }"
                :image="false"
                :dotsOptions="" /> -->
        <div class="card-bg rounded-xl p-4 md:p-6 border border-gray-200 mb-6">
            <div class="step_coban_5 flex justify-center p-6 bg-white rounded-xl border-2 border-gray-300 dark:border-gray-500 min-h-[340px] items-center">
                
            <p v-if="src_url_qr == '' " class="text-gray-400">{{ t("qrcode_mota_hien") }}</p>
            <div v-else>
                <QRCodeVue3 
                            ref="qrRef"
                            :value="src_url_qr"
                            :key="refKey"
                            :width="size_qr"
                            :height="size_qr"
                            :download="dlIsActive"
                            downloadButton="hidden-download-btn"
                            :fileExt="duoi_file"
                            :downloadOptions="{ name: 'dlteam-qr', extension: duoi_file }"
                            :image="false"
                            :dotsOptions="edit_dot"
                            />
            </div>
            </div>

        </div>
        <div class="flex card-bg rounded-xl p-4 md:p-6 border border-gray-200  justify-center items-center">
        <button @click="DownloadPNG" class="step_coban_6 w-max p-20 bg-gradient-to-r bg-blue-700  hover:bg-blue-900S text-white font-bold py-4 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg flex flex-col items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span>{{ t("qrcode_save") }}</span>
        </button>
        </div>


    </div>

<!--   -->

    </div>


<div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="nangcao" role="tabpanel" aria-labelledby="nangcao-tab">
<h2 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:mb-6">{{ t("qrcode_sangtao") }}</h2>

<div class="space-y-6">
    <div class="join join-vertical bg-base-100">
        <div class="collapse collapse-arrow join-item border-base-300 border">
            <input class="step_nangcao_1" type="radio" name="my-accordion-4" checked="checked" />
            <div class="collapse-title font-semibold">{{ t("qrcode_nc_title_pc") }}</div>
            <div class="collapse-content text-sm">
            <p class="mb-2 text-body">{{ t("qrcode_nc_des_pc_1") }}</p>
            <p class="mb-2 text-body">{{ t("qrcode_nc_des_pc_2") }}</p>
            <div class="grid grid-cols-3 grid-rows-2 gap-3">
                <div v-for="items in list_type_qr" class="card sm:max-w-sm">
                    <figure><img class="rounded-md" :src="'/public/images/img_qr/'+items.url_img+'.png'"  :alt="'DLTeam QR Code '+ items.name_type" :width="200" :height="200"/></figure>
                    <p class="mt-3 text-body text-center font-medium text-gray-500 dark:text-neutral-500">{{ items.name_type }}</p>
                </div>

                <!-- <div class="card sm:max-w-sm">
                    <figure><img class="rounded-md" src="/public/images/img_qr/type_hien_dai.png"  alt="DLTeam QR Code Hiện Đại" /></figure>
                    <p class="mt-3 text-body text-center font-medium text-gray-500 dark:text-neutral-500">Cổ điển</p>
                </div> -->
           </div>
            <div class="text-center mt-3">
            <el-dropdown class="inline-block">
                <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50">
                {{ name_type }}
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                    <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
                </button>
                <el-menu anchor="bottom end" popover class="m-0 w-56 origin-top-right rounded-md bg-white p-0 shadow-lg  outline-black/5 transition [--anchor-gap:theme(spacing.2)] [transition-behavior:allow-discrete] data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <div class="py-1">

                    <a v-for="items in list_type_qr" @click="change_type(items.type)" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">{{ items.name_type }}</a>
                    <!--
                    <a @click="change_type('square')" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Cổ điển</a>
                    <a @click="change_type('dots')" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Hiện đại</a>
                    <a @click="change_type('rounded')" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Bo góc</a>
                    <a @click="change_type('classy')" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Giọt nước</a>
                    <a @click="change_type('classy-rounded')" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Giọt bo tròn</a>
                    <a @click="change_type('extra-rounded')" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Bo tròn mạnh</a>
                    -->
                </div>
                </el-menu>
            </el-dropdown>
            </div>
            </div>
        </div>
        <div class="step_nangcao_2 collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title font-semibold">{{ t("qrcode_nc_title_ms") }}</div>
            <div class="collapse-content text-sm">
            <p class="mb-2 text-body">{{ t("qrcode_nc_des_ms_1") }}</p>
            
            <div class="grid grid-cols-2 grid-rows-1 gap-3">
                <div class="card sm:max-w-sm">
                    <figure><img class="rounded-md" src="/public/images/img_qr/color_qr.png"  alt="DLTeam QR Code Cổ Điển Màu Sắc QR" /></figure>
                    <p class="mt-3 text-body text-center font-medium text-gray-500 dark:text-neutral-500">{{ t("qrcode_nc_des_ms_2") }}</p>
                </div>
                <div class="card sm:max-w-sm">
                    <figure><img class="rounded-md" src="/public/images/img_qr/color_bg_qr.png"  alt="DLTeam QR Code Cổ Điển Màu Nền QR" /></figure>
                    <p class="mt-3 text-body text-center font-medium text-gray-500 dark:text-neutral-500">{{ t("qrcode_nc_des_ms_3") }}</p>
                </div>
            </div>
                
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                <label class="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2 block" data-i18n="qr_color">{{ t("qrcode_nc_des_ms_2") }}:</label>
                <input type="color" v-model="qrColor" value="#000000" class="w-full h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer">
                </div>
                <div>
                <label class="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2 block" data-i18n="bg_color">{{ t("qrcode_nc_des_ms_2") }}:</label>
                <input type="color" v-model="qrColor_bg" value="#ffffff" class="w-full h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer">
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">⚠️ {{ t("qrcode_nc_des_ms_4") }}</p>
            
            </div>
            </div>
        </div>
        <div class="collapse collapse-arrow join-item border-base-300 border">
            <input class="step_nangcao_3" type="radio" name="my-accordion-4" />
            <div class="collapse-title font-semibold">{{ t("qrcode_nc_title_logo") }}</div>
            <div class="collapse-content text-sm">
            <p class="mb-2 text-body">{{ t("qrcode_nc_des_logo_1") }}</p> 
            <p class="mb-2 text-body">{{ t("qrcode_nc_des_logo_2") }}</p>
            <!-- <ul class="ps-5 text-body list-disc">
                <li><a href="https://flowbite.com/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
                <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
            </ul> -->
            <div class="grid grid-cols-3 grid-rows-1 gap-3">
                <div class="card sm:max-w-sm">
                    <figure><img class="rounded-md" src="/public/images/img_qr/type_co_dien.png"  alt="DLTeam QR Code Cổ Điển Mặc Định" /></figure>
                    <p class="mt-3 text-body text-center font-medium text-gray-500 dark:text-neutral-500">{{ t("qrcode_nc_des_logo_3") }}</p>
                </div>
                <div class="card sm:max-w-sm">
                    <figure><img class="rounded-md" src="/public/images/img_qr/logo_media.png"  alt="DLTeam QR Code Logo Mạng Xã Hội" /></figure>
                    <p class="mt-3 text-body text-center font-medium text-gray-500 dark:text-neutral-500">{{ t("qrcode_nc_des_logo_4") }}</p>
                </div>
                <div class="card sm:max-w-sm">
                    <figure><img class="rounded-md" src="/public/images/img_qr/logo_add.png"  alt="DLTeam QR Code Thêm Từ Thư Viện" /></figure>
                    <p class="mt-3 text-body text-center font-medium text-gray-500 dark:text-neutral-500">{{ t("qrcode_nc_des_logo_5") }}</p>
                </div>
            </div>
            <div class="space-y-3 mt-3">
                
                <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
                <input type="radio" name="ip_image" v-model="ip_image" value="false" class="mr-3 w-4 h-4 text-indigo-600">
                <div class="flex-1">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t("qrcode_nc_des_logo_3") }}</span>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tip: {{ t("qrcode_nc_des_logo_6") }}</p>
                </div>
                </label>

                <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
                <input type="radio"  name="ip_image" v-model="ip_image" value="logo_media" class="mr-3 w-4 h-4 text-indigo-600">
                <div class="flex-1">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t("qrcode_nc_des_logo_7") }}</span>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tip: {{ t("qrcode_nc_des_logo_8") }}</p>
                </div>
                </label>
                
                <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
                <input type="radio" name="ip_image" v-model="ip_image" value="true" class="mr-3 w-4 h-4 text-indigo-600">
                <div class="flex-1">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t("qrcode_nc_des_logo_9") }}</span>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tip: {{t("qrcode_nc_des_logo_10")}}</p>
                </div>
                </label>

                <input v-if="ip_image == 'true'" type="file" @change="file_img" class="w-full px-4 py-3 border-2 input-bg rounded-xl transition-all">
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">⚠️ {{ t("qrcode_nc_des_logo_11") }}.</p>
            
            </div>
        </div>
        <div class="step_nangcao_4 collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title font-semibold">{{ t("qrcode_nc_title_kichthuoc") }}</div>
            <div class="collapse-content text-sm">
            <p class="mb-2 text-body">{{ t("qrcode_nc_des_kichthuoc_1") }}</p> 
            <div class="space-y-3">
                <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Kích thước:</label>
                    <input type="number" v-model="size_qr" class="bg-neutral-secondary-medium border border-default-medium rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="200px, 300px, 400px,..." required />
            
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">⚠️ {{ t("qrcode_nc_des_kichthuoc_2") }}</p>
            </div>
        </div>
        <div class="step_nangcao_5 collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title font-semibold">{{ t("qrcode_nc_title_dinhdang") }}</div>
            <div class="collapse-content text-sm">
            <p class="mb-2 text-body">{{ t("qrcode_nc_des_dinhdang_1") }}</p> 
            
            <div class="space-y-3">
                <div class="flex items-center">
                    <label for="duoi_file" class="block mb-2.5 text-sm font-medium text-heading">{{ t("qrcode_nc_des_dinhdang_2") }}</label>
                    <select id="duoi_file" v-model="duoi_file" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                        <option value="png">PNG</option>
                        <option value="jpeg">JPEG</option>
                        <option value="webp">WEBP</option>
                        <option value="svg">SVG</option>
                    </select>
                </div>
            </div>  
            </div>
        </div>
        </div>
        <div class="card-bg rounded-xl p-4 md:p-6 border border-gray-200 mb-6">
            <div id="qrcode" class="step_nangcao_6 flex justify-center p-6 bg-white rounded-xl border-2 border-gray-300 dark:border-gray-500 min-h-[340px] items-center">
                <p v-if="src_url_qr == '' " class="text-gray-400">{{ t("qrcode_mota_hien") }}</p>
                <div v-else>
                    <QRCodeVue3 
                                ref="qrRef"
                                :value="src_url_qr"
                                :key="refKey"
                                :width="size_qr"
                                :height="size_qr"
                                :download="dlIsActive"
                                downloadButton="hidden-download-btn"
                                :fileExt="duoi_file"
                                :downloadOptions="{ name: 'dlteam-qr', extension: duoi_file }"
                                :image="image_qr"
                                :dotsOptions="edit_dot" 
                                :backgroundOptions="backgroundOptions_edit"
                                />
                </div>
            </div>
        </div>
        <div class="flex card-bg rounded-xl p-4 md:p-6 border border-gray-200  justify-center items-center">
            <button @click="DownloadPNG" class="step_nangcao_7 w-max p-20 bg-gradient-to-r bg-blue-600  hover:bg-blue-900S text-white font-bold py-4 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg flex flex-col items-center gap-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>{{ t("qrcode_save") }}</span>
            </button>
        </div>
    </div>



<!--
    <div class="card-bg rounded-xl p-4 md:p-6 border border-gray-200">
        <p class="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span>🎨</span>
            <span data-i18n="qr_colors">QR Code Colors:</span>
        </p>
        Chọn các tính năng củ qr code

        <div>
            <input type="range" min="200" max="1000" v-model="size_qr"/>
<select v-model="dots_type">
  <option value="square">Vuông</option>
  <option value="dots">Chấm tròn</option>
  <option value="rounded">Tròn bo nhẹ</option>
  <option value="classy">classy</option>
  <option value="classy-rounded">classy-rounded</option>
  <option value="extra-rounded">Bo tròn cực mạnh</option>
</select>

<input type="file" @change="file_img" placeholder="Files" >

        </div>



        <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
                <label class="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2 block" data-i18n="qr_color">QR Color:</label>
                <input type="color" v-model="qrColor" value="#000000" class="w-full h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer">
            </div>
            <div>
                <label class="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2 block" data-i18n="bg_color">Background Color:</label>
                <input type="color" v-model="qrColor_bg" value="#ffffff" class="w-full h-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer">
            </div>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2" data-i18n="color_warning">⚠️ Note: Use high contrast colors (black/white) for best scanability. Light or similar colors may reduce scanning ability.</p>
        <div width="500" height="500">
        <QRCodeVue3
        :value="src_url_qr"
        :key="refKey"
        :width="size_qr"
        :height="size_qr"
        :download="dlIsActive"
        downloadButton="hidden-download-btn2"
        :fileExt="duoi_file"
        :downloadOptions="{ name: 'dlteam-qr', extension: duoi_file }"
        :image="input_active.images"
        :dotsOptions="edit_dot"
        :background-options="backgroundOptions" />
        </div>
    </div>
-->


</div>
</div>
</div>
</div>
</div>
</div>

  <VOnboardingWrapper
  v-model:step="currentStep"
  :steps="steps"
  :options="onboardingOptions"
  ref="wrapper"
/>
<VOnboardingWrapper
  v-model:step="currentStep2"
  :steps="steps2"
  :options="onboardingOptions"
  ref="wrapper2"
/>
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
