<template>
  <section class="w-[1200px] mx-auto shadow-md p-6 rounded-xl mt-8">
    <div class="flex justify-between items-center">
      <div class="flex justify-center items-end">
        <h2 class="text-4xl font-bold">High Rating</h2>
        <p class="text-gray-300 ml-8 font-thin">Most trending tour right now</p>
      </div>
      <div class="flex justify-center items-center cursor-pointer">
        <p>See All 67 tours & activities</p>
        <SvgIcon
          name="arrowRigjt"
          class="text-2xl cursor-pointer text-gray-400 ml-2"
        />
      </div>
    </div>
    <div class="mt-8">
      <div class="columns-3 gap-6">
        <div
          class="h-[400px] bg-slate-200 rounded-xl shadow-sm overflow-hidden"
        >
          <div
            class="h-[250px] bg-[url('@/assets/images/highRate.jpg')] bg-no-repeat bg-center bg-cover"
          >
            <span class="w-full flex p-2">
              <SvgIcon name="star" class="text-2xl ml pt-2-1 text-yellow-300" />
              <SvgIcon name="star" class="text-2xl ml pt-2-1 text-yellow-300" />
              <SvgIcon name="star" class="text-2xl ml pt-2-1 text-yellow-300" />
              <SvgIcon name="star" class="text-2xl ml pt-2-1 text-yellow-300" />
              <SvgIcon name="star" class="text-2xl ml-1 text-yellow-300" />
              <p class="ml-4 text-gray-500">
                1803
                <span class="text-sm text-gray-400">Review</span>
              </p>
            </span>
          </div>
          <div class="relative h-[150px]">
            <div
              class="absolute top-[-15px] left-2 bg-gradient-to-r from-cyan-400 to-cyan-700 rounded-3xl px-2 text-gray-200"
            >
              TOP 5 TOUR
            </div>
            <div class="p-4 h-full flex-col">
              <div class="text-xl">Japan Osaka | Fuji</div>
              <div class="flex">
                <div class="w-1/2">
                  <ul class="flex-col justify-evenly">
                    <li class="mt-1.5 flex items-center">
                      <SvgIcon name="people-group" class="text-gray-500" />
                      <span class="ml-2 text-gray-400 font-thin">
                        Private Tour
                      </span>
                    </li>
                    <li class="mt-1.5 flex items-center">
                      <SvgIcon name="location" class="text-gray-500" />
                      <span class="ml-2 text-gray-400 font-thin">
                        Japan | Osaka
                      </span>
                    </li>
                    <li class="mt-1.5 flex items-center">
                      <SvgIcon name="clock" class="text-gray-500" />
                      <span class="ml-2 text-gray-400 font-thin">4 Days</span>
                    </li>
                  </ul>
                </div>
                <div class="w-1/2 self-end">
                  <div class="mt-auto">
                    <div class="text-gray-400 text-right">START PRICE</div>
                    <div class="text-3xl font-bold text-blue-500 text-right">
                      <sup class="text-base">$</sup>
                      1,859
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-[400px] bg-slate-200 rounded-xl shadow-sm">
          <div
            class="h-[400px] bg-slate-200 rounded-xl shadow-sm overflow-hidden"
          >
            <div
              class="h-[250px] bg-[url('@/assets/images/highRate.jpg')] bg-no-repeat bg-center bg-cover"
            >
              <span class="w-full flex p-2">
                <SvgIcon
                  name="star"
                  class="text-2xl ml pt-2-1 text-yellow-300"
                />
                <SvgIcon
                  name="star"
                  class="text-2xl ml pt-2-1 text-yellow-300"
                />
                <SvgIcon
                  name="star"
                  class="text-2xl ml pt-2-1 text-yellow-300"
                />
                <SvgIcon
                  name="star"
                  class="text-2xl ml pt-2-1 text-yellow-300"
                />
                <SvgIcon name="star" class="text-2xl ml-1 text-yellow-300" />
                <p class="ml-4 text-gray-500">
                  1803
                  <span class="text-sm text-gray-400">Review</span>
                </p>
              </span>
            </div>
            <div class="relative h-[150px]">
              <div
                class="absolute top-[-15px] left-2 bg-gradient-to-r from-cyan-400 to-cyan-700 rounded-3xl px-2 text-gray-200"
              >
                TOP 5 TOUR
              </div>
              <div class="p-4 h-full flex-col">
                <div class="text-xl">Japan Osaka | Fuji</div>
                <div class="flex">
                  <div class="w-1/2">
                    <ul class="flex-col justify-evenly">
                      <li class="mt-1.5 flex items-center">
                        <SvgIcon name="people-group" class="text-gray-500" />
                        <span class="ml-2 text-gray-400 font-thin">
                          Private Tour
                        </span>
                      </li>
                      <li class="mt-1.5 flex items-center">
                        <SvgIcon name="location" class="text-gray-500" />
                        <span class="ml-2 text-gray-400 font-thin">
                          Japan | Osaka
                        </span>
                      </li>
                      <li class="mt-1.5 flex items-center">
                        <SvgIcon name="clock" class="text-gray-500" />
                        <span class="ml-2 text-gray-400 font-thin">4 Days</span>
                      </li>
                    </ul>
                  </div>
                  <div class="w-1/2 self-end">
                    <div class="mt-auto">
                      <div class="text-gray-400 text-right">START PRICE</div>
                      <div class="text-3xl font-bold text-blue-500 text-right">
                        <sup class="text-base">$</sup>
                        1,859
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-[400px] bg-slate-200 rounded-xl shadow-sm">
          <div
            class="h-[400px] bg-slate-200 rounded-xl shadow-sm overflow-hidden"
          >
            <div
              class="h-[250px] bg-[url('@/assets/images/highRate.jpg')] bg-no-repeat bg-center bg-cover"
            >
              <span class="w-full flex p-2">
                <SvgIcon
                  name="star"
                  class="text-2xl ml pt-2-1 text-yellow-300"
                />
                <SvgIcon
                  name="star"
                  class="text-2xl ml pt-2-1 text-yellow-300"
                />
                <SvgIcon
                  name="star"
                  class="text-2xl ml pt-2-1 text-yellow-300"
                />
                <SvgIcon
                  name="star"
                  class="text-2xl ml pt-2-1 text-yellow-300"
                />
                <SvgIcon name="star" class="text-2xl ml-1 text-yellow-300" />
                <p class="ml-4 text-gray-500">
                  1803
                  <span class="text-sm text-gray-400">Review</span>
                </p>
              </span>
            </div>
            <div class="relative h-[150px]">
              <div
                class="absolute top-[-15px] left-2 bg-gradient-to-r from-cyan-400 to-cyan-700 rounded-3xl px-2 text-gray-200"
              >
                TOP 5 TOUR
              </div>
              <div class="p-4 h-full flex-col">
                <div class="text-xl">Japan Osaka | Fuji</div>
                <div class="flex">
                  <div class="w-1/2">
                    <ul class="flex-col justify-evenly">
                      <li class="mt-1.5 flex items-center">
                        <SvgIcon name="people-group" class="text-gray-500" />
                        <span class="ml-2 text-gray-400 font-thin">
                          Private Tour
                        </span>
                      </li>
                      <li class="mt-1.5 flex items-center">
                        <SvgIcon name="location" class="text-gray-500" />
                        <span class="ml-2 text-gray-400 font-thin">
                          Japan | Osaka
                        </span>
                      </li>
                      <li class="mt-1.5 flex items-center">
                        <SvgIcon name="clock" class="text-gray-500" />
                        <span class="ml-2 text-gray-400 font-thin">4 Days</span>
                      </li>
                    </ul>
                  </div>
                  <div class="w-1/2 self-end">
                    <div class="mt-auto">
                      <div class="text-gray-400 text-right">START PRICE</div>
                      <div class="text-3xl font-bold text-blue-500 text-right">
                        <sup class="text-base">$</sup>
                        1,859
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped></style>
