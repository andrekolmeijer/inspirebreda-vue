<script setup>
import { useDataStore } from '../stores/DataStore'
import IconFacebook from './icons/IconFacebook.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconInstagram from './icons/IconInstagram.vue'
import FooterHeading from './FooterHeading.vue'

const { socials } = useDataStore()
</script>

<template>
  <FooterHeading>
    <template #heading>Social</template>
    <nav class="text-inspire-orange">
      <ul class="flex">
        <li
          v-for="(social, index) in socials"
          :key="index"
          class="ml-4 transition-opacity duration-200 first:ml-0 hover:opacity-75 focus:opacity-75 active:opacity-100">
          <a
            :href="social.href"
            target="_blank"
            :aria-label="social.label">
            <IconFacebook v-if="social.label == 'facebook'" />
            <IconTwitter v-if="social.label == 'twitter'" />
            <IconInstagram v-if="social.label == 'instagram'" />
          </a>
        </li>
      </ul>
    </nav>
  </FooterHeading>
</template>
