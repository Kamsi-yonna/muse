<template>
  <Icon name="heroicons:queue-list" class="text-xl ml-3 text-white" />
  <Icon name="ic:round-volume-up" class="text-xl ml-3 text-white" />
  <!-- <Icon name="ic:round-volume-off" class="text-2xl ml-3 text-[#868686]" /> -->
  <div class="flex items-center ml-2 w-[120px] relative mt-2 mb-[23px]">
    <input
      type="range"
      class="mt-[24px] absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white"
    />
    <div
      class="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0 bg-green-500"
    />
    <div
      class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full"
    />
  </div>
</template>

<script setup></script>

<style scoped>
.rangeDotHidden[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0;
  height: 0;
}
</style>
