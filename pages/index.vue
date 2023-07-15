<template>
  <div class="bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5">
    <!-- SEARCH  -->
    <div
      class="max-w-[1150px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333] p-1.5 px-5 pr-8 flex items-center"
    >
      <div
        class="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse"
      ></div>
      <input
        type="text"
        class="bg-[#1a1a1a] px-2 text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs"
        placeholder="Search..."
      />
      <div
        class="flex items-center divide-dotted divide-x-2 divide-[#333 ] ml-auto"
      >
        <div class="flex space-x-2 p3-5">
          <button class="tag">Minimal</button>
          <button class="tag">House</button>
          <button class="tag">Minimal</button>
        </div>
      </div>

      <div class="flex items-center space-x-1.5 text-[#cecece] pl-4">
        <span class="font-medium text-sm">FILTERS</span>
      </div>
    </div>
    <!-- SEARCHEND  -->
    <div
      class="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-6-8 p-4"
    >
      <!-- POSTER  -->
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
        class="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll h-[1000px] md:h-96 scrollbar-this scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-[830px]"
      >
        <!-- TRACKS  -->
        <div
          class="flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out"
        >
          <div class="flex items-center">
            <img
              src="https://picsum.photos/id/237/200/300"
              alt=""
              class="rounded-xl h-12 w-12 object-cover mr-3"
            />
            <div>
              <h4 class="text-white text-sm font-semibold truncate w-[140px]">
                TRACK TITLE
              </h4>
              <P
                class="text-[rgb(1770,179,179)] text-[13px] font-semibold group-hover:text-white"
                >TRACK ARTIST</P
              >
            </div>
          </div>

          <div class="md:ml-auto flex items-center space-x-2.5">
            <div class="text-white flex space-x-1 text-sm font-semibold">
              <h4>TRACK POPULARITY</h4>
            </div>
            <div
              class="flex items-center rounded-full border-2 border-[#262626] w-[85px] h-10 relative cursor-pointer group-hover:border-white/40"
            ></div>
          </div>
        </div>
        <!-- TRACKS END  -->
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
