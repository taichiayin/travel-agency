<template>
  <section class="w-full">
    <Banner></Banner>
    <div class="w-[1200px] mx-auto mt-20 px-4">
      <PackageCard v-for="i in 5" :key="i" class="mt-8"></PackageCard>
    </div>
    <SignInOff class="mt-20"></SignInOff>
  </section>
</template>

<script setup lang="ts">
import Banner from './components/Banner.vue'
import PackageCard from './components/PackageCard.vue'
import SignInOff from './components/SignInOff.vue'

</script>

<style lang="scss" scoped>

</style>