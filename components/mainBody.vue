<template>
  <section
    class="bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5"
  >
    <!-- SEARCH  -->
    <searchbar :search="search" :setSearch="setSearch" />
    <!-- SEARCHEND  -->
    <div
      class="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-6-8 p-4"
    >
      <!-- POSTER  -->
      <musicPoster />
    </div>
    <!-- POSTER  END-->

    <div class="flex gap-x-8 absolute min-w-full md:relative ml-6">
      <div class="hidden xl:inline max-w-[720px]">
        <h2 class="text-white font-bold mb-3">Genres</h2>
        <div class="flex gap-x-2 gap-y-2.5 flex-wrap mb-3">
          <div class="genre text-white">Classic</div>
          <div class="genre text-white">House</div>
          <div class="genre text-white">Minimal</div>
          <div class="genre text-white">Hip-hop</div>
          <div class="genre text-white">Electronic</div>
          <div class="genre text-white">Chillout</div>
          <div class="genre text-white">Blues</div>
          <div class="genre text-white">Country</div>
          <div class="genre text-white">Techno</div>
        </div>
        <button class="btn">All Genres</button>
      </div>
    </div>

    <div>
      <h2 class="text-white font-bold mb-3">New Releases</h2>
      <div
        class="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll scrollbar-hide h-[1000px] md:h-96 scrollbar-this scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-[830px]"
      >
        <!-- TRACKS  -->
        <musicTrack />
        <!-- TRACKS END  -->
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import searchbar from "./searchbar";

export default {
  setup() {
    const search = ref("");

    const setSearch = (value) => {
      search.value = value;
    };

    return {
      search,
      setSearch,
    };
  },
  components: {
    searchbar,
  },
};
</script>

<style></style>
