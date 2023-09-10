<template>
  <div class="card p-2 rounded-xl shadow-[0_2px_10px_0_rgb(0,0,0,.1)]">
    <!-- cover -->
    <div class="w-full bg-[url('@/assets/images/blogs/archive.jpg')] aspect-[3/2] rounded-xl"></div>
    <!-- author -->
    <div class="">
      <div class="mt-4 flex justify-start items-center">
        <img src="/src/assets/images/blogs/avatar.jpg" alt="" class="w-20 h-20 object-cover rounded-full">
        <div class="ml-4">
          <div class="flex p-1">
            <div class="pr-2 font-['Jost'] border-r-2">24-Sep-2022</div>
            <div class="ml-2 font-['Jost']">250 View</div>
          </div>
          <div class="p-1 flex items-center">
            <SvgIcon name="location" class="text-lg text-red-400" />
            <p class="ml-2 font-thin">Iceland</p>
          </div>
        </div>
      </div>
      <!-- archive -->
      <div class="mt-4">
        <div class="text-3xl font-bold tracking-wide">We spent 24 hours in Switzerland with Trafalgar Travel Director</div>
        <p class="text-lg font-thin mt-2 mb-2">Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas lacus tincidunt ac.</p>
        <button class="py-2 px-4 text-white rounded-full font-['Jost'] bg-blue-500 border border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border" href="">Read More</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'

</script>

<style scoped>

</style>