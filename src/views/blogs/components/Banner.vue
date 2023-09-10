<template>
    <div class="relative w-full aspect-[16/4] bg-[url('@/assets/images/blogs/banner.jpg')] bg-[center_bottom_-5rem] opacity-90 bg-no-repeat bg-cover
    flex justify-center items-center">
      <h1 class="font-['Raleway'] text-white text-7xl tracking-widest">BLOG ARCHIVES</h1>
      <div class="absolute flex -bottom-[33px] bg-white py-2 px-4 rounded-full shadow-xl">
        <div class="flex flex-col justify-center items-start px-6 border-r-2">
          <label for="">Location</label>
          <input class="font-thin focus:outline-none" type="text" placeholder="Where are you go">
        </div>
        <div class="flex flex-col justify-center items-start px-6 border-r-2">
          <label for="">Check in - Check out</label>
          <input class="font-thin " type="date" value="2023-01-01"/>
        </div>
        <div class="flex flex-col justify-center items-start px-6 border-r-2">
          <label for="">Pax Number</label>
          <input class="font-thin focus:outline-none" type="text" placeholder="No. of People">
        </div>
        <button class="ml-6 py-2 px-6 text-white rounded-full bg-blue-500 font-['Jost'] border border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border">SEARCH</button>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>