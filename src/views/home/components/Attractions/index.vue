<template>
  <section class="w-full">
    <swiper-container
      navigation="true"
      effect="fade"
      :crossFade="true"
      :loop="true"
      :speed="1000"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide>
        <img
          src="@/assets/images/101.jpg"
          alt="taipei"
          class="w-full h-[700px] object-cover"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/himeji.jpg"
          alt="taipei"
          class="w-full h-[700px] object-cover"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="@/assets/images/thai.jpg"
          alt="taipei"
          class="w-full h-[700px] object-cover"
        />
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script setup lang="ts">
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()
</script>

<style scoped></style>
