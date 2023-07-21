<template>
  <div
    class="flex items-center justify-between space-x-18 cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out"
  >
    <div class="flex items-center">
      <img
        :src="album.albumCover"
        alt=""
        class="rounded-xl h-12 w-12 object-cover mr-3"
      />
      <div>
        <h4 class="text-white text-sm font-semibold truncate w-[450px]">
          {{ track.name }}
        </h4>
        <p class="text-white text-[13px] font-semibold">
          {{ album.albumArtist }}
        </p>
      </div>
    </div>

    <div class="md:ml-auto flex items-center space-x-2.5">
      <div class="text-white flex space-x-1 text-sm font-semibold">
        <!-- {{ isTrackTime }} -->
      </div>
      <div
        class="flex items-center rounded-full border-2 border-[#262626] w-[85px] h-10 relative cursor-pointer group-hover:border-white/40"
      >
        <Icon
          name="material-symbols:favorite"
          class="text-xl ml-3 text-[#868686]"
        />
        <div
          class="h-10 w-10 rounded-full border border-[#15883e] flex items-center justify-center absolute -right-0.5 bg-[#15883e] icon hover:scale-110"
        >
          <Icon
            name="material-symbols:play-arrow"
            class="text-white text-xl ml-[1px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
const { track, album } = defineProps(["track", "album"]);
</script>

<style scoped></style>
