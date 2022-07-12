<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useDataStore } from '../stores/DataStore'
import FooterHeading from './FooterHeading.vue'
import FootNote from './FootNote.vue'

const { openingstijden } = useDataStore()
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <FooterHeading>
    <template #heading>Openingstijden</template>
    <table>
      <tr
        v-for="(openingstijd, index) in openingstijden"
        :key="index">
        <td
          class="pr-8 align-top"
          v-text="openingstijd.dag"></td>
        <td
          class="align-top"
          v-text="openingstijd.tijd"></td>
      </tr>
    </table>
    <FootNote v-if="!smAndLarger" />
  </FooterHeading>
</template>
