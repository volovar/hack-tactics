// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      meta: [{ name: "description", content: "" }],
      title: "Tactics Coder",
      viewport: "width=device-width, initial-scale=1"
    }
  },
  css: ["~/assets/css/main.css"]
});
