<script lang="ts" setup>
const props = defineProps({
  code: {
    type: Number,
    default: 400,
  },
})
const errorsMap: {
  [key: string]: string
} = {
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '404': 'Not Found',
}
const error = computed(() => {
  const { code } = props
  return {
    code,
    message: errorsMap[code.toString()] || 'Unknown Error',
  }
})
</script>

<template>
  <div>
    <h1>
      <span>{{ error.code }}</span>
      <span>{{ error.message }}</span>
    </h1>
  </div>
</template>
