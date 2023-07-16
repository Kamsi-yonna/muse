<template>
  <section class="p-4 space-y-8 pr-8">
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
      <div
        as="div"
        name="ic:round-keyboard-arrow-down"
        class="w-24 h-12 relative flex items-center text-white"
      >
        <div class="w-full absolute right-1 group">
          <div
            class="flex items-center w-full px-4 py3 text-sm font-medium text-white bg-[#1a1a1a] rounded-full hover:bg-[#3e3e3e]"
          >
            <icon
              name="ic:outline-keyboard-arrow-down"
              class="h-6 text-[#686868]"
              aria-hidden="true"
            />
            <img
              src="https://picsum.photos/id/34/200/300"
              alt=""
              class="rounded-full w-11 absolute -right-1 object-cover"
            />
          </div>
        </div>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transition opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div
            class="absolute right-0 w-56 mt-24 origin-top-right bg-[#1a1a1a] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <div>
                <button
                  class="group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold tracking-wide text-white cursor-default"
                >
                  <Icon
                    name="ion:ios-log-out"
                    class="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <!-- DROPDOWN END -->
    </div>
  </section>
</template>

<script></script>

<style></style>
