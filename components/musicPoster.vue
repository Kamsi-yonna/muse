<template>
  <div
    class="w-[230px] h-[340px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto bg-[#3a3a3a4c] hover:bg-[#3c3c3c]"
    @click="handleClick"
  >
    <img
      :src="album.albumCover"
      alt=""
      class="p-2 h-185 w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
    />

    <div class="absolute bottom-5 inset-x-0 ml-4 flex items-center space-x-3.5">
      <div
        class="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center group-hover:bg-[#1db954] flex-shrink-0"
      >
        <Icon
          name="material-symbols:play-arrow"
          class="text-white text-xl ml-[1px]"
        />
      </div>

      <div class="text-[15px]">
        <h4 class="font-extrabold w-44">
          {{ album.albumName }}
        </h4>
        <h6>{{ album.albumArtist }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps(["album"]);

const trackLength = ref(0);

function handleClick() {
  trackLength.value = props.album.tracks.length;
  // console.log("Poster index:", trackLength.value);
  console.log(trackLength.value);
}
</script>
<style lang="scss" scoped></style>
