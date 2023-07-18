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
      <MusicPlayer />
    </div>
  </main>
</template>

<script setup></script>

<style scoped></style>
