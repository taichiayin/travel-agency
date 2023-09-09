<template>
  <section
    class="w-full h-[400px] bg-yellow-200 mt-8 bg-[url('@/assets/images/helper.png')] bg-no-repeat bg-center bg-cover relative"
  >
    <div class="w-full h-[400px] absolute top-0 left-0 mask shadow-sm" />
    <div class="w-full h-[400px] flex absolute z-1">
      <div class="w-1/2 flex flex-col justify-center items-end pr-[150px]">
        <h3 class="font-bold text-4xl">Need Assistance</h3>
        <p class="text-xl font-thin mt-4">
          Need Help? Call us or drop a message
        </p>
        <p class="text-xl font-thin">Our agents will be in touch shortly</p>
        <div class="flex mt-4">
          <div class="bg-white px-2 rounded-xl text-lg font-bold">
            CONTACT US
          </div>
          <span class="flex justify-center items-center ml-8">
            <SvgIcon name="phone" class="text-xl" />
            <span class="ml-2 text-xl">1-888-321-7666</span>
          </span>
        </div>
      </div>
      <div class="w-1/2 flex flex-col justify-center items-start pl-[200px]">
        <div
          class="w-[300px] flex justify-between items-center shadow-xl rounded-md mt-6 overflow-hidden"
        >
          <div class="py-6 px-5 bg-amber-200">
            <SvgIcon name="shield" class="text-[50px] text-gray-700" />
          </div>
          <div
            class="flex-1 h-full flex flex-col justify-around items-center p-4"
          >
            <p class="font-bold text-lg">Travel Insurance</p>
            <span class="font-thin text-cyan-600 cursor-pointer">
              Learn More
            </span>
          </div>
        </div>
        <div
          class="w-[300px] flex justify-between items-center shadow-xl rounded-md mt-6 overflow-hidden"
        >
          <div class="py-6 px-5 bg-amber-200">
            <SvgIcon
              name="hand-holding-dollar"
              class="text-[50px] text-gray-700"
            />
          </div>
          <div
            class="flex-1 h-full flex flex-col justify-around items-center p-4"
          >
            <p class="font-bold text-lg">Travel & Earn</p>
            <span class="font-thin text-cyan-600 cursor-pointer">
              Learn More
            </span>
          </div>
        </div>
        <div
          class="w-[300px] flex justify-between items-center shadow-xl rounded-md mt-6 overflow-hidden"
        >
          <div class="py-6 px-5 bg-amber-200">
            <SvgIcon name="headset" class="text-[50px] text-gray-700" />
          </div>
          <div
            class="flex-1 h-full flex flex-col justify-around items-center p-4"
          >
            <p class="font-bold text-lg">Customer Support</p>
            <span class="font-thin text-cyan-600 cursor-pointer">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped>
.mask {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 90%
  );
}
</style>
