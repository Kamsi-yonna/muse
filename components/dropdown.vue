<template>
  <Menu
    as="div"
    name="ic:round-keyboard-arrow-down"
    class="w-24 h-12 relative flex items-center"
  >
    <div class="w-full absolute right-1 group">
      <MenuButton
        class="flex items-center w-full px-4 py-3 text-sm font-medium text-white bg-[#1a1a1a] rounded-full hover:bg-[#3e3e3e] hover:text-l"
      >
        <icon
          name="ic:outline-keyboard-arrow-down"
          class="h-6 text-[#686868]"
          aria-hidden="true"
        />
        <img
          src="https://yt3.ggpht.com/GIDkDMA1u5ay2EMiXETuqVCuBTew89d0ZW_szFCl3XFIhjDW6hJPK2DETrb4JINR64Gc_Vagtw=s88-c-k-c0x00ffffff-no-rj-mo"
          alt=""
          class="rounded-full w-11 h-11 absolute -right-1 object-cover"
        />
      </MenuButton>
    </div>
    <TransitionRoot
      enter="transition ease-out duration-100"
      enter-from="transform opacity-0 scale-95"
      enter-to="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leave-from="transition opacity-100 scale-100"
      leave-to="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 w-52 mt-10 origin-top-right bg-[#1a1a1a] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <Nuxt-link
              class="group flex justify-between space-between rounded-md items-center w-full px-2 py-2 mb-2 text-sm font-semibold tracking-wide text-white hover:bg-[#3e3e3d] cursor-pointer"
            >
              <h1>Account</h1>
              <Icon name="ic:round-launch" class="w-5 h-5" aria-hidden="true" />
            </Nuxt-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <Nuxt-link
              class="group flex justify-between space-between rounded-md items-center w-full px-2 py-2 mb-2 text-sm font-semibold tracking-wide text-white hover:bg-[#3e3e3d] cursor-pointer"
            >
              <h1>Profile</h1>
              <Icon
                name="material-symbols:person-2-outline-rounded"
                class="w-5 h-5 ml-10"
                aria-hidden="true"
              />
            </Nuxt-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <Nuxt-link
              class="group flex justify-between space-between rounded-md items-center w-full px-2 py-2 mb-2 text-sm font-semibold tracking-wide text-white hover:bg-[#3e3e3d] cursor-pointer"
            >
              <h1>Support</h1>
              <Icon
                name="solar:question-square-line-duotone"
                class="w-5 h-5"
                aria-hidden="true"
              />
            </Nuxt-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <Nuxt-link
              class="group flex justify-between space-between rounded-md items-center w-full px-2 py-2 mb-2 text-sm font-semibold tracking-wide text-white hover:bg-[#3e3e3d] cursor-pointer"
            >
              <h1>Settings</h1>
              <Icon
                name="ic:outline-settings"
                class="w-5 h-5"
                aria-hidden="true"
              />
            </Nuxt-link>
          </MenuItem>
          <div class="border-b border-b-gray-600"></div>
          <MenuItem v-slot="{ active }">
            <Nuxt-link
              to="/signIn"
              class="group flex justify-between space-between rounded-md items-center w-full px-2 py-2 mb-2 text-sm font-semibold tracking-wide text-white hover:bg-[#3e3e3d] cursor-pointer"
            >
              <h1>Log out</h1>
              <Icon name="ion:ios-log-out" class="w-5 h-5" aria-hidden="true" />
            </Nuxt-link>
          </MenuItem>
        </div>
      </MenuItems>
    </TransitionRoot>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>

<style lang="scss" scoped></style>
