<template>
  <section
    class="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8"
  >
    <img
      src="https://picsum.photos/id/22/200/300"
      class="rounded-md cursor-pointer"
      width="56"
      height="56"
      contain
      to="/"
    />

    <div class="flex flex-col space-y-8 text-2xl text-white cursor-pointer">
      <Icon
        name="material-symbols:home-outline"
        class="sidebarIcon opacity-[0.85]"
      />

      <Icon name="heroicons:queue-list" class="sidebarIcon" />
      <Icon name="ph:microphone-stage" class="sidebarIcon" />
      <Icon name="cil:playlist-add" class="sidebarIcon" />
      <Icon name="material-symbols:bar-chart" class="sidebarIcon" />
      <Icon name="eos-icons:three-dots-loading" class="sidebarIcon" />
    </div>
  </section>
</template>

<script></script>

<style></style>
