// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  experimental: {
    reactivityTransform: false,
  },
  components: true,
})
