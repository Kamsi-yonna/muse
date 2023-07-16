// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  app: {
    head: {
      title: "Muse",
      meta: [
        {
          name: "description",
          content: "",
        },
      ],
      link: [{}],
    },
  },
});
