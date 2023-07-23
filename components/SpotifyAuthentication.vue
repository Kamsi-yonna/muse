<!-- SpotifyAuthentication.vue -->
<template>
  <div>
    <button @click="authorizeSpotify">Authorize Spotify</button>
  </div>
</template>

<script>
import axios from "axios";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const getAccessToken = async () => {
  try {
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    };

    const response = await axios.post(authOptions.url, authOptions.data, {
      headers: authOptions.headers,
    });

    const accessToken = response.data.access_token;
    // Do something with the accessToken (store it in state, etc.)
    return accessToken;
  } catch (error) {
    console.error("Error getting access token:", error);
    console.log("Error object:", error);
    return null;
  }
};

// Export the getAccessToken function so that it can be used in the parent component
export { getAccessToken };
</script>

<style scoped></style>
