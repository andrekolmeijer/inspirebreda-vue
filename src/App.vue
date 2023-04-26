<script setup>
import { RouterView } from 'vue-router'
import IconContact from './components/icons/IconContact.vue'
import smoothscroll from 'smoothscroll-polyfill'
import WelcomeAlert from './components/WelcomeAlert.vue';

smoothscroll.polyfill()
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
      <ul class="flex space-x-8">
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
            <IconContact />
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>
