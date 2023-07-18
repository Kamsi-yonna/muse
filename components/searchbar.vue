<template>
  <div
    class="max-w-[1150px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center"
  >
    <div
      class="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse"
    ></div>
    <input
      type="text"
      :value="search"
      @input="updateSearch"
      class="bg-[#1a1a1a] px-2 text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#b6b6b6] text-xs"
      placeholder="What do you want to listen to?"
    />

    <div
      class="flex items-center divide-dotted divide-x-2 divide-[#333] ml-auto"
    >
      <div class="flex space-x-2 pr-5">
        <button class="tag">Pop</button>
        <button class="tag">Afro</button>
        <button class="tag">Rock</button>
      </div>
    </div>

    <div class="flex items-center space-x-1.5 text-[#cecece] pl-4">
      <Icon
        name="ic:round-short-text"
        class="text-white text-2xl animate-pulse"
      />
      <span class="font-medium text-sm">Filters</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "", //Empty string by default
    };
  },
  methods: {
    updateSearch(e) {
      this.search = event.target.value; //update the search property
    },
  },
};
</script>

<style lang="scss" scoped></style>
