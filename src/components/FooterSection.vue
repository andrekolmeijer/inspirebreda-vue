<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useDataStore } from '../stores/DataStore'
import ContactInfo from './ContactInfo.vue'
import OpeningHours from './OpeningHours.vue'
import SocialLinks from './SocialLinks.vue'
import FootNote from './FootNote.vue'

const { openingstijdenGewijzigd } = useDataStore()
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <footer
    id="contact"
    class="-scroll-mt-8 bg-inspire-white">
    <div
      class="m-auto flex max-w-5xl flex-col justify-between px-8 pt-16 pb-8 sm:block">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="space-y-4 font-light text-inspire-brown-dark">
          <ContactInfo />
        </div>
        <div
          id="openingstijden"
          class="scroll-m-8 space-y-4 font-light text-inspire-brown-dark">
          <OpeningHours />
        </div>
        <div class="space-y-4">
          <SocialLinks />
        </div>
      </div>
      <div class="flex justify-evenly">
        <!-- <FootNote v-if="smAndLarger"/> -->
        <p
          class="mt-8 text-center text-sm font-light italic text-inspire-brown-dark">
          Bijgewerkt:
          <span v-text="openingstijdenGewijzigd.datum"></span>
        </p>
      </div>
      <div
        class="mt-8 w-full border-t border-inspire-brown-dark border-opacity-25 text-center text-sm font-light text-inspire-brown-dark">
        <p class="pt-8">
          Copyright &copy;
          <span v-text="new Date().getFullYear()"></span> Inspire Coffee
          Company. Alle rechten voorbehouden.
        </p>
      </div>
    </div>
  </footer>
</template>
