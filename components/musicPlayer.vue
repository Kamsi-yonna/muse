<template>
  <div
    class="bg-[#181818] flex items-center justify-between px-5 py-3 rounded-t-2xl relative space-x-20 md:space-x-0 overflow-x-scroll md:overflow-x-hidden scrollbar-hide"
  >
    <div class="flex items-center">
      <img
        src="https://picsum.photos/id/12/200/300"
        alt=""
        class="h-14 w-14 cover rounded-sm mr-3"
      />
      <div>
        <h4
          class="text-white text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[150px]"
        >
          Futura Free
        </h4>
        <p
          class="text-xs text-[#686868] font-semibold cursor-pointer hover:underline"
        >
          Frank Ocean
        </p>
      </div>
      <div class="flex items-center ml-8 cursor-pointer">
        <Icon
          name="material-symbols:favorite-outline"
          class="text-xl ml-3 text-[#868686]"
        />
      </div>
    </div>

    <div class="max-w-[35%] mx-auto w-2/4 mb-3">
      <div class="flex-col items-center justify-center">
        <div class="buttons flex items-center justify-center h-[30px]">
          <button class="mx-2">
            <Icon
              name="iconamoon:playlist-shuffle-light"
              class="text-white text-xl"
            />
          </button>
          <button class="mx-2">
            <Icon name="ion:ios-skipbackward" class="text-white text-xl" />
          </button>

          <button class="p-1 rounded-full mx-3 bg-white">
            <Icon
              name="material-symbols:play-arrow"
              class="text-black items-center text-3xl"
            />
          </button>
          <button class="mx-2">
            <Icon name="ion:ios-skipforward" class="text-white text-xl" />
          </button>
          <button class="mx-2">
            <Icon
              name="iconamoon:playlist-repeat-list-light"
              class="text-white text-xl"
            />
          </button>
        </div>

        <div class="flex items-center h-[25px]">
          <div class="text-white text-[12px] pr-2 pt-[11px]"></div>
          <div class="w-full relative mt-2 mb-3">
            <input
              type="range"
              class="absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white"
            />
            <div
              class="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0"
            />
            <div
              class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full"
            />
          </div>
          <div class="text-white text-[12px] pl-2 pt-[11px]"></div>
        </div>
      </div>
    </div>
    <div class="flex items-center w-1/4 justify-end pr-10">
      <playerVolume />
    </div>
    <!-- <div class="text-[#b3b3b3] flex items-center space-x-3">
      <RiPlayList2Fill class="playerIcon" />
      <div class="flex items-center playerIcon">
        <RiComputerLine class="croppedIcon" />
        <MdOutlineSpeaker class="-ml-2.5" />
      </div>

      <div class="flex items-center space-x-3">
        <FiVolume2 class="text-[#b3b3b3] text-xl playerIcon" />
        <div class="bg-[#383838] w-[88px] h-1 rounded-xl">
          <div class="bg-[#b3b3b3] w-14 h-1 rounded-xl" />
        </div>
      </div>
      <CgArrowsExpandRight class="playerIcon" />
    </div> -->
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
