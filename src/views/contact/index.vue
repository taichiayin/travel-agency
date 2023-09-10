<template>
  <section class="w-full mb-10">
    <Banner></Banner>
    <div class="mt-20 w-[1200px] mx-auto flex justify-center items-stretch">
      <div class="w-1/2 mx-4">
        <p class="text-lg text-red-400 font-['Yellowtail']">GET IN TOUCH</p>
        <h2 class="mt-4 text-5xl font-bold tracking-wider">CONTACT US TO GET MORE INFO</h2>
        <p class="mt-4 font-thin">Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.</p>
        <div class="mt-10 p-4 flex flex-col justify-center items-start shadow-xl rounded-lg">
          <input class="w-full mb-4 px-4 py-2 text-xl border bg-transparent rounded-lg placeholder:font-thin focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="YOUR NAME" />
          <input class="w-full mb-4 px-4 py-2 text-xl border bg-transparent rounded-lg placeholder:font-thin focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="YOUR EMAIL"/>
          <textarea class="w-full mb-4 px-4 py-2 text-xl border bg-transparent rounded-lg placeholder:font-thin focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-40" type="text" placeholder="YOUR MESSAGE"/>
          <button class="py-2 px-4 text-white rounded-full font-['Jost'] bg-blue-500 border border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border" href="">SUBMIT MESSAGE</button>
        </div>
      </div>
      <!--  -->
      <div class="w-1/2 mx-4">
        <h2 class="text-2xl font-medium font-['Jost']">Need help ?? Feel free to contact us !</h2>
        <p class="mt-4 font-thin">Penatibus numquam? Non? Aliqua tempore est deserunt sequi itaque, nascetur, consequuntur conubianigp, explicabo? Primis convallis ullam. Egestas deserunt eius molestias app incididuntPenatibus numquam? Non? Aliqua tempore est deserunt sequi itaque, nascetur, consequuntur conubianigp, explicabo? Primis convallis ullam. Egestas deserunt eius molestias app incididunt.</p>
        <!--  -->
        <div class="mt-6 flex flex-col justify-center items-start">
          <div class="flex justify-start items-center mb-4">
            <SvgIcon name="location" class="text-4xl text-red-400" />
            <div class="flex flex-col ml-4">
              <h3 class="text-lg font-medium">Location</h3>
              <p class="font-light">51 Rat-C-IEO 300 Gee Rd., Gatong Way, DanGatong, Thuket, Wulala 88888</p>
            </div>
          </div>
          <div class="flex justify-start items-center mb-4">
            <SvgIcon name="email" class="text-4xl text-blue-400" />
            <div class="flex flex-col ml-4">
              <h3 class="text-lg font-medium">Email</h3>
              <p class="font-light">service@evertoolate.com</p>
            </div>
          </div>
          <div class="flex justify-start items-center ">
            <SvgIcon name="phone" class="text-4xl text-green-400" />
            <div class="flex flex-col ml-4">
              <h3 class="text-lg font-medium">Phone</h3>
              <p class="font-light">1-888-321-7666</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="mt-6">
          <h3 class="text-2xl font-medium font-['Jost']">Follow us on social media</h3>
          <div class="">
            <ul class="flex mt-2">
              <li class="p-4 border rounded-full"><SvgIcon name="facebook" class="text-4xl" /></li>
              <li class="p-4 border rounded-full ml-4"><SvgIcon name="google-plus" class="text-4xl" /></li>
              <li class="p-4 border rounded-full ml-4"><SvgIcon name="twitter" class="text-4xl" /></li>
              <li class="p-4 border rounded-full ml-4"><SvgIcon name="instagram" class="text-4xl" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Banner from './components/Banner.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style lang="scss" scoped>

</style>