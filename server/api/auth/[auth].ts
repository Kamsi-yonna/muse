// // file: ~/server/api/auth/[...].ts
// import { NuxtAuthHandler } from "#auth";
// import SpotifyProvider from "next-auth/providers/spotify";
// export default NuxtAuthHandler({
//   providers: [
//     // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
//     SpotifyProvider.default({
//       clientId: process.env.SPOTIFY_CLIENT_ID,
//       clientSecret: process.env.SPOTIFY_CLIENT_SECRET
//     }),
//   ],
// });
