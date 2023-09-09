<template>
  <div class="w-full flex justify-between items-stretch overflow-hidden rounded-xl shadow-xl">
     <div class="w-[379px] bg-[url('@/assets/images/packages/forest.jpg')] aspect-[3/2] bg-cover bg-no-repeat bg-center"></div>
     <div class="w-[379px] p-10">
      <h2 class="text-2xl font-bold">EXPERIENCE THE GREAT HOLIDY IN FOREST</h2>
      <p class="font-thin mt-2">Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.</p>
      <div class="mt-2 p-2 font-light flex justify-center items-center shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-full">
        <div class="px-3 border-r-[1px] text-sm"><SvgIcon name="clock" class="text-gray-500 inline-block mr-1" />7D/6N</div>
        <div class="px-3 border-r-[1px] text-sm"><SvgIcon name="users" class="text-gray-500 inline-block mr-1" />pax:10</div>
        <div class="px-3 text-sm"><SvgIcon name="location" class="text-gray-500 inline-block mr-1" />Thailand</div>
      </div>
     </div>
     <div class="w-[379px] flex flex-col justify-center items-center bg-blue-400">
      <div class="flex justify-center items-center ">
        <p class="text-lg text-white mr-2 ">(25 reviews)</p>
        <SvgIcon v-for="i in 5" :key="i" name="star" class="text-xl pt-2-1 text-yellow-300" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-6xl mt-4 font-['Raleway'] text-white">$750</p>
        <p class="text-sm text-white">/ per person</p>
      </div>
      <div class="mt-4">
        <button class="py-2 px-6 text-lg text-white border-2 border-white rounded-full ">BOOK NOW</button>
      </div>
     </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'

</script>

<style scoped>

</style>