<script setup>
import { useDataStore } from '../stores/DataStore'

const { images } = useDataStore()
</script>

<template>
  <div
    class="flex h-[300px] snap-x snap-mandatory grid-cols-12 grid-rows-4 flex-row gap-3 overflow-x-auto scrollbar-hide sm:grid sm:h-[648px]">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="second:snap-start second:pl-8 sm:second:pl-0 h-full max-w-[300px] flex-shrink-0 snap-center snap-always last:snap-end last:pr-8 sm:max-w-none sm:last:pr-0"
      :class="image.span">
      <img
        class="h-full w-full rounded object-cover"
        :src="image.src"
        :alt="image.alt" />
    </div>
  </div>
</template>
