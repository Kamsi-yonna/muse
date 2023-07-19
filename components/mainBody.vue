<template>
  <section
    class="bg-black ml-24 py-4 space-y-4 md:max-w-5xl flex-grow md:mr-2.5"
  >
    <!-- SEARCH  -->
    <searchbar :search="search" :setSearch="setSearch" />
    <!-- SEARCHEND  -->
    <div
      class="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4"
    >
      <!-- POSTER  -->
      <musicPoster :album="artist[0]" @fetchAlbumData="handleFetchAlbumData" />
      <musicPoster :album="artist[1]" @fetchAlbumData="handleFetchAlbumData" />
      <musicPoster :album="artist[2]" @fetchAlbumData="handleFetchAlbumData" />
      <musicPoster :album="artist[3]" @fetchAlbumData="handleFetchAlbumData" />
    </div>
    <!-- POSTER  END-->c

    <div class="flex gap-x-4 absolute min-w-full md:relative">
      <!-- new release  -->
      <div>
        <h2 class="text-white font-bold mb-3">Your Library</h2>
        <div
          class="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll scrollbar-hide h-[1000px] md:h-96 scrollbar-this overflow-x-hidden scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-[300px]"
        >
          <!-- TRACKS  -->
          <div
            class="overflow-y-scroll scrollbar-hide h-[800px] md:h-96 scrollbar-this overflow-x-hidden scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500"
          >
            <playlist />
            <playlist />
            <playlist />
            <button class="btn mt-4">Create New Playlist</button>
          </div>
          <!-- TRACKS END  -->
        </div>
      </div>
      <div>
        <h2 class="text-white font-bold mb-3">Queue</h2>
        <div
          class="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll scrollbar-hide h-[800px] md:h-96 scrollbar-this scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-[700px]"
        >
          <!-- TRACKS  -->
          <musicTrack :album="artist[0]" />
          <!-- TRACKS END  -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import searchbar from "./searchbar";
import artist from "../artist.json";

export default {
  setup() {
    const search = ref("");

    const setSearch = (value) => {
      search.value = value;
    };

    function handleFetchAlbumData(index) {
      const albumData = artist.find((album) => album.id === index);
      console.log(`Album Name: ${albumData.albumName}`);
      console.log(`Number of Tracks: ${albumData.tracks.length}`);
    }

    return {
      search,
      setSearch,
      artist,
      handleFetchAlbumData,
    };
  },
  components: {
    searchbar,
  },
};
</script>

<style></style>
