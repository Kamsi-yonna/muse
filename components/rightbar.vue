<template>
  <section class="py-4 space-y-8 pr-1">
    <div class="flex space-x-2 items-center justify-between">
      <div
        class="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-12 py-3 px-4 cursor-pointer"
      >
        <Icon name="simple-icons:nuxtdotjs" class="text-[#ccc] text-xl" />
        <Icon
          name="material-symbols:settings-suggest-outline"
          class="text-[#ccc] text-xl"
        />
        <Icon name="ic:baseline-notifications" class="text-[#ccc] text-xl" />
      </div>
      <!-- DROPDOWN  -->
      <dropdown />
      <!-- DROPDOWN END -->
    </div>

    <div
      class="bg-[#0d0d0d] border-2 border-[#262626] p-4 rounded-xl space-y-4"
    >
      <div class="flex items-center justify-between">
        <h4 class="text-white font-semibold text-sm">Recently Played</h4>
        <Icon
          name="material-symbols:display-settings"
          class="text-[#686868] h-6"
        />
      </div>

      <div
        class="space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] scrollbar-hide"
      >
        <!-- RECENTLY PLAYED  -->
        <recentlyPlayed />
        <recentlyPlayed />
        <recentlyPlayed />
        <!-- <MusicTrack /> -->
        <!-- <recentlyPlayed /> -->

        <!-- RECENTLY PLAYED END -->
      </div>
      <button class="btn">View All</button>
    </div>
  </section>
</template>

<script></script>

<style></style>
