<script lang="ts">
export default {
  setup() {
    useHead({
      title: 'Nuxt Boilerplate',
      titleTemplate: '%s - Nuxt 3',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Boilerplate',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    })
  },
}
</script>
