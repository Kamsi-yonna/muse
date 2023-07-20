<template>
  <li class="flex items-center justify-between rounded-md hover:bg-[#2A2929]">
    <div class="flex items-center w-full py-1.5">
      <div class="text-white font-semibold w-[40px] ml-5">
        <span class="text-green-500">
          {{ index }}
        </span>
      </div>

      <div>
        <div class="text-white font-semibold">
          {{ album.albumArtist }}
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  track: Object,
  artist: Object,
  index: Number,
});

const { track, artist, index } = toRefs(props);
</script>

<style lang="scss" scoped></style>
