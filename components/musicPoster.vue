<template>
  <div
    class="w-[230px] h-[340px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"
  >
    <img
      :src="currentAlbum.albumCover"
      alt=""
      class="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
    />

    <div
      class="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5"
    >
      <div
        class="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center group-hover:bg-[#1db954] flex-shrink-0"
      >
        <Icon
          name="material-symbols:play-arrow"
          class="text-white text-xl ml-[1px]"
        />
      </div>

      <div class="text-[15px]">
        <h4 class="font-extrabold truncate w-44">
          {{ currentAlbum.albumName }}
        </h4>
        <h6>{{ currentAlbum.albumArtist }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup>
import artist from "../artist.json";
// console.log(artist);

let currentIndex = 1;
const currentAlbum = computed(() => artist[currentIndex]); //to get the album data for the current index

function changeAlbumIndex(newIndex) {
  currentIndex = newIndex;
}
</script>

<style lang="scss" scoped></style>
