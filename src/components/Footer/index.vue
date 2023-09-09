<template>
  <Footer
    class="w-full py-10 mx-auto mt-8 bg-cyan-950 text-[rgba(255,255,255,.8)]"
  >
    <div class="w-[1200px] mx-auto flex">
      <div class="">
        <div class="flex items-center">
          <img
            src="@/assets/images/logo.png"
            alt="logo img"
            class="w-20 h-20 rounded-full"
          />
          <h1 class="ml-4 text-2xl text-white">Never Too Late</h1>
        </div>

        <div class="font-thin text-xl mt-2">Term & conditions</div>
        <div class="font-thin text-xl mt-2">Privacy Policy</div>
        <ul class="flex mt-2">
          <li><SvgIcon name="facebook" class="text-lg" /></li>
          <li><SvgIcon name="google-plus" class="text-lg ml-4" /></li>
          <li><SvgIcon name="twitter" class="text-lg ml-4" /></li>
          <li><SvgIcon name="instagram" class="text-lg ml-4" /></li>
        </ul>
      </div>

      <div class="flex-1 flex ml-14">
        <div class="flex flex-col ml-8">
          <h3 class="font-bold text-lg">SUPPORT</h3>
          <span class="font-thin leading-6 mt-4">Blog</span>
          <span class="font-thin leading-6">Help</span>
          <span class="font-thin leading-6">Contact</span>
        </div>
        <div class="flex flex-col ml-8">
          <h3 class="font-bold text-lg">TRAVEL TIPS</h3>
          <span class="font-thin leading-6 mt-4">Island Tour</span>
          <span class="font-thin leading-6">Adventures</span>
          <span class="font-thin leading-6">Shows</span>
          <span class="font-thin leading-6">Fishing</span>
          <span class="font-thin leading-6">Diving Tips</span>
          <span class="font-thin leading-6">City Tour</span>
        </div>
        <div class="flex flex-col ml-8">
          <h3 class="font-bold text-lg">BECOME AN AGENT</h3>
          <span class="font-thin leading-6 mt-4">Apply now</span>
          <span class="font-thin leading-6">Agent sign in</span>
        </div>
        <div class="flex flex-col ml-8">
          <h3 class="font-bold text-lg">CONTACT US</h3>
          <p class="mt-4 font-thin leading-6">
            51 Rat-C-IEO 300 Gee Rd., Gatong Way, Dan
          </p>
          <p class="font-thin">Gatong, Thuket, Wulala 88888</p>
          <p class="font-thin leading-6 mt-6">Emai: service@evertoolate.com</p>
          <p class="font-thin leading-6">Phone: 1-888-321-7666</p>
        </div>
      </div>
    </div>
  </Footer>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped></style>
