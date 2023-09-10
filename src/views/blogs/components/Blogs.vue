<template>
  <div class="w-[1200px] mx-auto flex mt-20">
    <div class="w-2/3 p-4">
      <ArchivesCard class="mb-4" v-for="i in 3" :key="i"></ArchivesCard>
    </div>
    <div class="flex-1 p-4">
      <div class="flex justify-start items-stretch border border-blue-500 rounded-xl overflow-hidden">
        <input class="p-2 flex-1 h-full bg-transparent focus:outline-none" type="text" placeholder="Search Here">
        <div class="p-1 bg-blue-500 cursor-pointer">
          <SvgIcon name="magnifying-glass" class="text-3xl text-white " />
        </div>
      </div>
      <div class="mt-4 flex flex-col justify-center items-start">
        <h2 class="text-2xl font-bold tracking-wider">HIGH RATE</h2>
        <div class="mt-2">
          <ArchivesCardSM v-for="i in 4" :key="i" class="mb-2"></ArchivesCardSM>
        </div>
      </div>
      <div class="mt-4 flex flex-col justify-center items-start">
        <h2 class="text-2xl font-bold tracking-wider">CATEGORY</h2>
        <div class="mt-2">
          <button v-for="item in category" :key="item" class="mr-2 mb-2 py-2 px-4 rounded-full border hover:border-blue-500 hover:bg-blue-500 hover:text-white">{{ item }}</button>
        </div>
      </div>
      <div class="mt-4 flex flex-col justify-center items-start">
        <h2 class="text-2xl font-bold tracking-wider">TRAVEL TAGS</h2>
        <div class="mt-2">
          <button v-for="item in travelTags" :key="item" class="mr-2 mb-2 py-2 px-4 rounded-full border hover:border-blue-500 hover:bg-blue-500 hover:text-white">{{ item }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import ArchivesCard from './ArchivesCard.vue';
import ArchivesCardSM from './ArchivesCardSM.vue';
import { ref } from 'vue';

const category = ref(['Europe','Asia', 'Africa', 'America', 'Oceania'])
const travelTags = ref(['Travel', 'City Tour', 'Summer Tour', 'Holyday', 'life Style', 'Adventure'])

</script>

<style scoped>

</style>