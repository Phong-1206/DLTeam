<script setup>
import { ref } from "vue";
import { VOnboardingWrapper } from "v-onboarding";
import "v-onboarding/dist/style.css";

const wrapper = ref(null);
const currentStep = ref(0);

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


const startGuide = () => {
  wrapper.value.start();
};
</script>

<template>
  <button class="step1">Button 1</button>
  <button class="step2">Button 2</button>

  <button @click="startGuide">Start Guide</button>

  <VOnboardingWrapper
  v-model:step="currentStep"
  :steps="steps"
  :options="onboardingOptions"
  ref="wrapper"
/>
</template>
