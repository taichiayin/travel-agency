<template>
  <header
    class="w-full mx-auto text-center p-4 flex justify-between items-center fixed top-0 left-0 z-10 bg-white"
  >
    <div class="flex justify-center items-center">
      <img
        src="@/assets/images/logo.png"
        alt="logo img"
        class="w-20 h-20 rounded-full"
      />
      <h1 class="ml-4 text-2xl">Never Too Late</h1>
    </div>
    <ul class="flex justify-center items-center tracking-wider">
      <li class="p-2 mr-6 cursor-pointer hover:text-blue-500"><router-link to="/">DESTINATIONS +</router-link></li>
      <li class="p-2 mr-6 cursor-pointer hover:text-blue-500"><router-link to="/packages">PACKAGES +</router-link></li>
      <li class="p-2 mr-6 cursor-pointer hover:text-blue-500"><router-link to="/blogs">BLOGS +</router-link></li>
      <li class="p-2 cursor-pointer hover:text-blue-500"><router-link to="/contact">CONTACT</router-link></li>
    </ul>
    <div class="flex items-center">
      <span class="flex items-center border-r-2 pr-6">
        <SvgIcon name="phone" class="text-2xl mr-2" />
        1-888-321-7666
      </span>
      <span class="pl-6">
        <SvgIcon name="i18n" class="text-4xl cursor-pointer" />
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped></style>
