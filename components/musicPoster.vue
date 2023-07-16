<template>
  <div
    class="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"
  >
    <img
      src="https://picsum.photos/id/237/200/300"
      alt=""
      class="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
    />

    <div
      class="absolute hottom-10 inset-x-10 ml-4 flex items-center space-x-3.5"
    >
      <div
        class="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center group-hover:bg[#1db654] flex-shrink-0"
      >
        TRACKPLAY
      </div>

      <div class="text-[15px]">
        <h4 class="font-extrabold truncate w-44">TRACK TITLE</h4>
        <h6>Track artist</h6>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
