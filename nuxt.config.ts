// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          app: {
            name: 'Nuxt Boilerplate EN',
            description: 'Nuxt Boilerplate description',
          },
          pages: {
            404: {
              title: 'Page not found',
            },
          },
        },
        pl: {
          app: {
            name: 'Nuxt Boilerplate PL',
            description: 'Nuxt Boilerplate opis',
          },
          pages: {
            404: {
              title: 'Strona nie znallieziona',
            },
          },
        },
      },
    },
  },
  experimental: {
    reactivityTransform: false,
  },
  components: true,
})
