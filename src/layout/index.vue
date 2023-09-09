<template>
  <Header />
  <div class="pt-[112px]">
    <RouterView c/>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
</script>

<style scoped></style>
