<script lang="ts" setup>
import { capitalize } from '~/utils/str'
const { t } = useI18n()

definePageMeta({
  layout: 'basic',
})
useHead(() => ({
  title: capitalize(t('pages.404.title')),
}))
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <Error :code="404" />
  </div>
</template>
