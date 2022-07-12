<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <div class="overflow-hidden sm:rounded">
    <img
      v-if="smAndLarger"
      class="h-[302px] w-full object-cover object-bottom"
      src="../assets/img/banner.jpg"
      alt="Vooraanzicht van Inspire Breda" />
    <img
      v-else
      class="h-80 w-full object-cover object-bottom"
      src="../assets/img/banner-mobile.jpg"
      alt="Vooraanzicht van Inspire Breda" />
  </div>
</template>
