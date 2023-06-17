<script setup>
import { RouterView } from 'vue-router'
import { useDataStore } from '@/stores/DataStore'
import IconFacebook from './components/icons/IconFacebook.vue'
import IconInstagram from './components/icons/IconInstagram.vue'
import IconContact from './components/icons/IconContact.vue'
import smoothscroll from 'smoothscroll-polyfill'
import WelcomeAlert from './components/WelcomeAlert.vue';

smoothscroll.polyfill()
const { socials } = useDataStore()
</script>

<template>
  <WelcomeAlert />
  <header class="m-auto flex max-w-5xl items-center justify-between p-8">
    <div class="h-14">
      <img
        class="h-full object-cover"
        src="./assets/img/inspire-logo-orange-dark-brown.svg"
        alt="Inspire Logo" />
    </div>
    <nav class="text-lg font-semibold text-inspire-brown-dark">
      <ul class="flex items-center space-x-4 -mt-1 sm:space-x-8">
        <li class="hidden sm:block">
          <a
            class="py-1 transition-colors duration-200 hover:text-inspire-orange focus:text-inspire-orange active:text-inspire-brown-dark"
            href="#menu"
            rel="nofollow">
            menu
          </a>
        </li>
        <li class="hidden sm:block">
          <a
            class="py-1 transition-colors duration-200 hover:text-inspire-orange focus:text-inspire-orange active:text-inspire-brown-dark"
            href="#contact"
            rel="nofollow">
            contact
          </a>
        </li>
        <li class="block sm:hidden">
          <a
            class="py-4 transition-colors duration-200 hover:text-inspire-orange focus:text-inspire-orange active:text-inspire-brown-dark"
            href="#contact">
            <IconContact class="!h-7 !w-7" />
          </a>
        </li>
        <li
          v-for="(social, index) in socials"
          :key="index"
          class="ml-4 transition-opacity duration-200 first:ml-0 hover:text-inspire-orange focus:text-inspire-orange active:text-inspire-brown-dark">
          <a
            :href="social.href"
            target="_blank"
            :aria-label="social.label">
            <IconFacebook v-if="social.label == 'facebook'" class="!h-6 !w-6"/>
            <IconInstagram v-if="social.label == 'instagram'" class="!h-6 !w-6"/>
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>
