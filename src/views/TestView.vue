<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import QRCodeVue3 from "qrcode-vue3";
onMounted(() => {
  initFlowbite()
})
const dots_type = ref("square")
const qrColor = ref();
const qrColor_bg = ref();
const size_qr = ref(800);
</script>
<template>

<!-- <div id="accordion-card" data-accordion="collapse">
  <h2 id="thuoc-tinh-qr" class="mt-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-1" aria-expanded="true" aria-controls="accordion-card-body-1">
      <span>Lựa chọn phong cách QR Code của bạn !</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-1" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="thuoc-tinh-qr">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">DLTeam hỗ trợ nhiều kiểu QR Code khác nhau để bạn lựa chọn theo đúng phong cách và nhu cầu sử dụng. Từ kiểu truyền thống đến hiện đại, tất cả đều được tối ưu để dễ quét và phù hợp cho mọi tình huống như chia sẻ thông tin, liên kết, Wi-Fi hay cửa hàng.</p>
      <p class="mb-2 text-body">Bạn có thể chọn Cổ điển để có độ tương thích cao, Hiện đại, Bo góc cân bằng và thân thiện, Giọt nước hoặc Giọt bo tròn mang cảm giác sang trọng, hoặc Bo tròn mạnh dành cho phong cách trẻ trung và mềm mại. DLTeam mang đến sự linh hoạt để bạn tạo mã QR đúng chất của riêng mình.</p>
      <select v-model="dots_type">
        <option value="square">Cổ điển</option>
        <option value="dots">Hiện đại</option>
        <option value="rounded">Bo góc</option>
        <option value="classy">Giọt nước</option>
        <option value="classy-rounded">Giọt bo tròn</option>
        <option value="extra-rounded">Bo tròn mạnh</option>
      </select>
<el-dropdown class="inline-block">
  <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
    Options
    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
      <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
    </svg>
  </button>
<button class="btn btn-soft btn-error">Error</button>
  <el-menu anchor="bottom end" popover class="m-0 w-56 origin-top-right rounded-md bg-white p-0 shadow-lg outline outline-1 outline-black/5 transition [--anchor-gap:theme(spacing.2)] [transition-behavior:allow-discrete] data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Account settings</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Support</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">License</a>
      <form action="#" method="POST">
        <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Sign out</button>
      </form>
    </div>
  </el-menu>
</el-dropdown>

    </div>
  </div>



  <h2 id="mau-sac-qr-code" class="mt-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-2" aria-expanded="false" aria-controls="accordion-card-body-2">
      <span>Tùy chỉnh màu sắc QR Code</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-2" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="mau-sac-qr-code">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">DLTeam cho phép bạn tùy chỉnh màu sắc QR Code để phù hợp với thương hiệu, sở thích hoặc mục đích sử dụng của bạn. Bạn có thể thay đổi màu chính của mã QR chỉ với một thao tác đơn giản, giúp thiết kế trở nên nổi bật hơn và phù hợp với phong cách cá nhân.</p>
      
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
    </div>
  </div>


  <h2 id="accordion-card-heading-3" class="mt-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-3" aria-expanded="false" aria-controls="accordion-card-body-3">
      <span>  Thêm logo hoặc hình ảnh vào QR Code</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-3" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="accordion-card-heading-3">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">DLTeam hỗ trợ bạn thêm hình ảnh hoặc logo vào giữa QR Code để tăng độ nhận diện và tạo dấu ấn riêng. Bạn có thể tải ảnh trực tiếp từ thiết bị của mình, dễ dàng chèn vào QR chỉ với vài thao tác.</p> 
      <p class="mb-2 text-body">Ngoài ra, DLTeam cũng cho phép bạn sử dụng logo sẵn có của các nền tảng phổ biến như Facebook, YouTube, TikTok, Zalo… giúp mã QR của bạn trông chuyên nghiệp và phù hợp hơn với nội dung liên kết. Tất cả đều được tối ưu để giữ khả năng quét ổn định và rõ ràng.</p>
      <div class="space-y-3">
        <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
        <input type="radio" name="centerOption" value="true" class="mr-3 w-4 h-4 text-indigo-600">
        <div class="flex-1">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Mặc định</span>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tip: Square image (1:1), minimum 200x200px, transparent background recommended</p>
        </div>
        </label>

        <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
        <input type="radio" name="centerOption" value="true" class="mr-3 w-4 h-4 text-indigo-600">
        <div class="flex-1">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Thêm Logo</span>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tip: Square image (1:1), minimum 200x200px, transparent background recommended</p>
        </div>
        </label>
        <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
        <input type="radio" name="centerOption" value="true" class="mr-3 w-4 h-4 text-indigo-600">
        <div class="flex-1">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Thêm ảnh thư viện</span>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tip: Square image (1:1), minimum 200x200px, transparent background recommended</p>
        </div>
        </label>

        <input type="file" id="logoFile" class="w-full px-4 py-3 border-2 input-bg rounded-xl transition-all">

      </div>
    </div>
  </div>


  <h2 id="accordion-card-heading-4" class="mt-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-4" aria-expanded="false" aria-controls="accordion-card-body-4">
      <span>Tùy chỉnh kích thước QR Code</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-4" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="accordion-card-heading-3">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">DLTeam cho phép bạn tùy chỉnh kích thước QR Code theo nhu cầu sử dụng. Bạn có thể dễ dàng tăng hoặc giảm kích thước để phù hợp với mục đích in ấn, chia sẻ online hoặc sử dụng trên các tài liệu thiết kế.</p> 
      <div class="space-y-3">
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Small Input</label>
            <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="Kích thucwoc ảnh" required />
      </div>
    </div>
  </div>


</div> -->








 <div class="space-y-6">




<div class="join join-vertical bg-base-100">
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" checked="checked" />
    <div class="collapse-title font-semibold">Lựa chọn phong cách QR Code của bạn?</div>
    <div class="collapse-content text-sm">
      <p class="mb-2 text-body">DLTeam hỗ trợ nhiều kiểu QR Code khác nhau để bạn lựa chọn theo đúng phong cách và nhu cầu sử dụng. Từ kiểu truyền thống đến hiện đại, tất cả đều được tối ưu để dễ quét và phù hợp cho mọi tình huống như chia sẻ thông tin, liên kết, Wi-Fi hay cửa hàng.</p>
      <p class="mb-2 text-body">Bạn có thể chọn Cổ điển để có độ tương thích cao, Hiện đại, Bo góc cân bằng và thân thiện, Giọt nước hoặc Giọt bo tròn mang cảm giác sang trọng, hoặc Bo tròn mạnh dành cho phong cách trẻ trung và mềm mại. DLTeam mang đến sự linh hoạt để bạn tạo mã QR đúng chất của riêng mình.</p>
      
      <div class="grid grid-cols-3 grid-rows-2 gap-3">
          <div class="card sm:max-w-sm">
            <figure><img class="rounded-md" src="/public/images/img_qr/type_co_dien.png"  alt="DLTeam QR Code Cổ Điển" /></figure>
              <p class="mt-3 text-body text-center font-medium text-gray-500 dark:text-neutral-500">Cổ điển</p>
          </div>

          <div class="card sm:max-w-sm">
            <figure><img class="rounded-md" src="/public/images/img_qr/type_hien_dai.png"  alt="DLTeam QR Code Cổ Điển" /></figure>
              <p class="mt-3 text-body text-center font-medium text-gray-500 dark:text-neutral-500">Cổ điển</p>
          </div>

          <div class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img class="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image">
              <p class="mt-3 text-xs text-gray-500 dark:text-neutral-500">
                Last updated 5 mins ago
              </p>
          </div>

          <div >4</div>
          <div >5</div>
          <div >6</div>
      </div>

      <el-dropdown class="inline-block">
        <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Cổ điển
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
        </button>
        <el-menu anchor="bottom end" popover class="m-0 w-56 origin-top-right rounded-md bg-white p-0 shadow-lg  outline-black/5 transition [--anchor-gap:theme(spacing.2)] [transition-behavior:allow-discrete] data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
          <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Cổ điển</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Hiện đại</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Bo góc</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Giọt nước</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Giọt bo tròn</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">Bo tròn mạnh</a>


          </div>
        </el-menu>
      </el-dropdown>
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title font-semibold">Tùy chỉnh màu sắc QR Code</div>
    <div class="collapse-content text-sm">
      <p class="mb-2 text-body">DLTeam cho phép bạn tùy chỉnh màu sắc QR Code để phù hợp với thương hiệu, sở thích hoặc mục đích sử dụng của bạn. Bạn có thể thay đổi màu chính của mã QR chỉ với một thao tác đơn giản, giúp thiết kế trở nên nổi bật hơn và phù hợp với phong cách cá nhân.</p>

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
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title font-semibold">Thêm logo hoặc hình ảnh vào QR Code</div>
    <div class="collapse-content text-sm">
      <p class="mb-2 text-body">DLTeam hỗ trợ bạn thêm hình ảnh hoặc logo vào giữa QR Code để tăng độ nhận diện và tạo dấu ấn riêng. Bạn có thể tải ảnh trực tiếp từ thiết bị của mình, dễ dàng chèn vào QR chỉ với vài thao tác.</p> 
      <p class="mb-2 text-body">Ngoài ra, DLTeam cũng cho phép bạn sử dụng logo sẵn có của các nền tảng phổ biến như Facebook, YouTube, TikTok, Zalo… giúp mã QR của bạn trông chuyên nghiệp và phù hợp hơn với nội dung liên kết. Tất cả đều được tối ưu để giữ khả năng quét ổn định và rõ ràng.</p>
      <!-- <ul class="ps-5 text-body list-disc">
        <li><a href="https://flowbite.com/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
      </ul> -->
      <div class="space-y-3">
        <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
        <input type="radio" name="centerOption" value="true" class="mr-3 w-4 h-4 text-indigo-600">
        <div class="flex-1">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Mặc định</span>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tip: Square image (1:1), minimum 200x200px, transparent background recommended</p>
        </div>
        </label>

        <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
        <input type="radio" name="centerOption" value="true" class="mr-3 w-4 h-4 text-indigo-600">
        <div class="flex-1">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Thêm Logo</span>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tip: Square image (1:1), minimum 200x200px, transparent background recommended</p>
        </div>
        </label>
        <label class="flex items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer hover:border-indigo-500 transition-all">
        <input type="radio" name="centerOption" value="true" class="mr-3 w-4 h-4 text-indigo-600">
        <div class="flex-1">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Thêm ảnh thư viện</span>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tip: Square image (1:1), minimum 200x200px, transparent background recommended</p>
        </div>
        </label>
        <input type="file" id="logoFile" class="w-full px-4 py-3 border-2 input-bg rounded-xl transition-all">
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">⚠️ Note: Use high contrast colors (black/white) for best scanability. Light or similar colors may reduce scanning ability.</p>
      </div>
  </div>
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title font-semibold">Tùy chỉnh kích thước QR Code</div>
    <div class="collapse-content text-sm">
      <p class="mb-2 text-body">DLTeam cho phép bạn tùy chỉnh kích thước QR Code theo nhu cầu sử dụng. Bạn có thể dễ dàng tăng hoặc giảm kích thước để phù hợp với mục đích in ấn, chia sẻ online hoặc sử dụng trên các tài liệu thiết kế.</p> 
      <div class="space-y-3">
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Small Input</label>
            <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="Kích thucwoc ảnh" required />
      </div>
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title font-semibold">Định dạng tải về QR Code</div>
    <div class="collapse-content text-sm">
      <p class="mb-2 text-body">DLTeam có nhiều định dạng tải xuống phú hợp với mọi công việc, nhu cầu sử dụng. Bạn dễ dàng tải xuống đúng định dang của mình chỉ với một cú nhấp chuột. </p> 
    </div>
  </div>
</div>
<div class="card-bg rounded-xl p-4 md:p-6 border border-gray-200 mb-6">
    <div class="flex justify-center p-6 bg-white rounded-xl border-2 border-gray-300 dark:border-gray-500 min-h-[340px] items-center">
        <!-- <p class="text-gray-400">Qr Code của bạn hiện tại đây!</p> -->
      <QRCodeVue3
                ref="qrRef"
                value="dev.ttp"
                :key="1"
                :width="size_qr"
                :height="size_qr"
                :download="dlIsActive"
                downloadButton="hidden-download-btn"
                :fileExt="duoi_file"
                :downloadOptions="{ name: 'dlteam-qr', extension: duoi_file }"
                :image="false"
                :dotsOptions="edit_dot" />
    </div>

</div>
<div class="flex card-bg rounded-xl p-4 md:p-6 border border-gray-200  justify-center items-center">
  <button @click="DownloadPNG" class="w-max p-20 bg-gradient-to-r bg-blue-700  hover:bg-blue-900S text-white font-bold py-4 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg flex flex-col items-center gap-2">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      <span>Lưu QR Code</span>
  </button>
</div>
</div>
<!-- 
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




        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">⚠️ Note: Use high contrast colors (black/white) for best scanability. Light or similar colors may reduce scanning ability.</p>

        <div width="500" height="500">
        </div> -->
    <!-- </div> -->
<!--
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
    </div> -->






    <!-- Campaign Tracking -->
    <!-- <div id="campaignSection" class="card-bg rounded-xl p-4 md:p-6 border border-gray-200">
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
    </div> -->

</div>











</template>
