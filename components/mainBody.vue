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
    <!-- POSTER  END-->

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
            <button @click="openModal" class="btn mt-4">
              Create New Playlist
            </button>
          </div>
          <!-- TRACKS END  -->
        </div>
      </div>
      <div>
        <h2 class="text-white font-bold mb-3">Queue</h2>
        <div
          class="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll scrollbar-hide h-[800px] md:h-96 scrollbar-this scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-[700px]"
        >
          <MusicTrackList :album="artist[1]" />
        </div>
      </div>
    </div>
    <CreatePlaylistModal v-if="isModalOpen" @closeModal="closeModal" />
  </section>
</template>

<script>
import { ref } from "vue";

import searchbar from "./searchbar";
import trackLength from "./MusicPoster";
import MusicTrack from "./MusicTrack";
import artist from "../artist.json";
import CreatePlaylistModal from "./CreatePlaylistModal";

const isModalOpen = ref(false);

function openModal() {
  console.log("open");
  isModalOpen.value = true;
}
function closeModal() {
  isModalOpen.value = false;
}

export default {
  setup() {
    const search = ref("");
    const selectedAlbumIndex = ref(0);
    const trackLengths = trackLength.value;

    const setSearch = (value) => {
      search.value = value;
    };

    return {
      search,
      setSearch,
      artist,
      selectedAlbumIndex,
      trackLengths,
      isModalOpen,
      openModal,
      closeModal,
    };
  },
  components: {
    searchbar,
    MusicTrack,
    CreatePlaylistModal,
  },
};
</script>

<style></style>
