// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],
  experimental: {
    reactivityTransform: false,
  },
  components: true,
})
