<template>
  <div class="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
    <div
      class="text-white text-8xl font-semibold h=[250] w-[600] animate-pulse"
    >
      <h1>MUSE</h1>
    </div>
    <div>
      <Nuxt-link
        to="/"
        class="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146] cursor-pointer"
      >
        Sign in to Muse
      </Nuxt-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
