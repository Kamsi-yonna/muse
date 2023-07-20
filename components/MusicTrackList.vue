<template>
  <div>
    <newComponent
      v-for="track in album.tracks"
      :key="track.id"
      :album="album"
      @fetchAlbumData="handleFetchAlbumData"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import newComponent from "./NewComponent";

const { album } = defineProps(["album"]);
</script>

<style></style>
