<template>
  <div class="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
    <div
      class="text-white text-8xl font-semibold h=[250] w-[600] animate-pulse"
    >
      <h1>MUSE</h1>
      <SpotifyAuthentication />
    </div>
    <div>
      <Nuxt-link
        to="/"
        class="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146] cursor-pointer"
        @click="signInWithSpotify"
      >
        Sign in to Muse
      </Nuxt-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getAccessToken } from "~/components/SpotifyAuthentication.vue";

export default defineComponent({
  setup() {
    // Function to sign in with Spotify
    const signInWithSpotify = async () => {
      const accessToken = await getAccessToken();
      console.log("Access Token:", accessToken);
      // Now you have the access token and can use it to make API calls to Spotify
    };

    return { signInWithSpotify };
  },
});
</script>

<style scoped></style>
