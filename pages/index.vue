<template>
  <main class="flex min-h-screen min-w-max bg-black lg:pb-24">
    <!-- SIDE BAR  -->
    <sidebar />
    <!-- SIDE BAR END -->

    <!-- BODY  -->
    <mainBody />
    <!-- BODY  END-->

    <!-- RIGHT BAR  -->
    <rightbar />
    <!-- RIGHT BAR END  -->

    <div class="fixed bottom-0 left-0 right-0 z-50 text-white">
      <div
        className="bg-[#181818] flex items-center justify-between px-5 py-2.5 rounded-t-2xl relative space-x-20 md:space-x-0 overflow-x-scroll md:overflow-x-hidden scrollbar-hide"
      >
        <div className="flex items-center">
          <img
            src="{playingTrack.albumUrl}"
            alt=""
            className="h-14
          rounded-xl mr-3"
          />
          <div>
            <h4
              className="text-white text-sm max-w-[150px] md:max-w-[250px] truncate"
            ></h4>

            <h5 className="text-xs text-[rgb(179,179,179)]"></h5>
          </div>
        </div>

        <div
          className="flex flex-col space-y-2 items-center md:absolute inset-x-auto w-full"
        >
          <div className="flex items-center text-[#b3b3b3] text-xl space-x-4">
            <BiShuffle className="text-lg playerIcon" />
            <BsFillSkipStartFill className="playerIcon" />
            <div
              className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center playerIcon hover:text-black"
            >
              <BsFillPlayFill className="ml-[1px]" />
            </div>
            <BsFillSkipEndFill className="playerIcon" />
            <IoRepeatOutline className="playerIcon" />
          </div>

          <div className="flex items-center space-x-2.5 text-xs text-[#CECECE]">
            <h4 className="-mt-0.5">0:00</h4>

            <div className="bg-[#383838] w-72 lg:w-[450px] h-1 rounded-xl" />

            <h4 className="-mt-0.5">0:00</h4>
          </div>
        </div>

        <div className="text-[#b3b3b3] flex items-center space-x-3">
          <RiPlayList2Fill className="playerIcon" />
          <div className="flex items-center playerIcon">
            <RiComputerLine className="croppedIcon" />
            <MdOutlineSpeaker className="-ml-2.5" />
          </div>

          <div className="flex items-center space-x-3">
            <FiVolume2 className="text-[#b3b3b3] text-xl playerIcon" />
            <div className="bg-[#383838] w-[88px] h-1 rounded-xl">
              <div className="bg-[#b3b3b3] w-14 h-1 rounded-xl" />
            </div>
          </div>
          <CgArrowsExpandRight className="playerIcon" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped></style>
