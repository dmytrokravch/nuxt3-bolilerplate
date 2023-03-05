<script lang="ts" setup>
definePageMeta({
  layout: 'basic',
})
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full mx-auto py-16">
      <div
        class="sm:w-1/3 w-full mx-auto p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-info-900 dark:border-gray-700"
      >
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Nuxt 3 boilerplate
        </h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Project starter with some useful features
        </p>
        <div
          class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"
        >
          <a
            href="https://github.com/dmytrokravch/nuxt3-bolilerplate"
            target="_blank"
            class="inline-flex items-center text-blue-600 hover:underline"
          >
            See the guideline
            <svg
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              ></path>
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
