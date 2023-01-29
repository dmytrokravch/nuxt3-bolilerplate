// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  experimental: {
    reactivityTransform: false,
  },
  components: true,
})
