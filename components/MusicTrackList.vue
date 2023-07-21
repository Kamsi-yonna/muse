<template>
  <div>
    <musicTrack
      class="cursor"
      v-for="(track, index) in album.tracks"
      :key="index"
      :track="track"
      :album="album"
      @fetchAlbumData="handleFetchAlbumData"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import musicTrack from "./musicTrack";

const { album } = defineProps(["album"]);
</script>

<style></style>
