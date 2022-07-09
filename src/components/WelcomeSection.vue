<script setup>
import { useDataStore } from '../stores/DataStore'

const dataStore = useDataStore()
const images = dataStore.images
</script>

<template>
  <section class="m-auto max-w-5xl text-inspire-brown-dark">
    <div class="overflow-hidden sm:mx-8 sm:rounded">
      <img
        class="hidden h-[302px] w-full object-cover object-bottom sm:block"
        src="../assets/img/banner.jpg"
        alt="Vooraanzicht van Inspire Breda"
      />
      <img
        class="block h-80 w-full object-cover object-bottom sm:hidden"
        src="../assets/img/banner-mobile.jpg"
        alt="Vooraanzicht van Inspire Breda"
      />
    </div>
    <div class="mx-8 mt-8">
      <h1 class="w-2/3 pt-8 text-3xl font-black uppercase tracking-normal">
        Welkom bij <span class="text-inspire-orange">Inspire</span>
      </h1>
      <p class="gap-8 py-8 text-base font-light hyphens-auto sm:columns-2">
        Met uitzicht op de Grote Markt van Breda genieten van de lekkerste koffie, gezonde lunch en afsluiten met een
        speciaalbiertje of de perfecte cocktail? Inspire heeft het allemaal in huis! Plof neer op onze bank of borrel
        met vrienden aan onze bartafel. Met de exper&shy;tise van ons personeel weet je zeker dat je het juiste drankje
        voorgeschoteld krijgt. Liever een dagje rustig werken? Met onze razendsnelle internetverbinding ben je klaar
        voor elke meeting. Kom gezellig langs en laat je inspireren!
      </p>
    </div>
    <div class="sm:mx-8">
      <div
        class="scrollbar-hide flex h-[300px] snap-x snap-mandatory grid-cols-12 grid-rows-4 flex-row gap-3 overflow-x-auto py-4 sm:grid sm:h-[648px]"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="h-full max-w-[300px] flex-shrink-0 snap-center snap-always last:snap-end last:pr-8 second:snap-start second:pl-8 sm:max-w-none sm:last:pr-0 sm:second:pl-0"
          :class="image.span"
        >
          <img
            class="h-full w-full rounded object-cover"
            :src="image.src"
            :alt="image.alt"
          />
        </div>
      </div>
    </div>
    <div
      class="mb-16 flex w-full flex-col items-center justify-center gap-6 px-8 pt-8 text-center sm:flex-row sm:gap-8"
    >
      <p class="font-light tracking-wide">
        Volg
        <a
          href="https://www.instagram.com/inspirebreda/"
          target="_blank"
          aria-label="instagram"
          class="bg-gradient-to-r from-amber-500 via-pink-500 to-indigo-500 bg-clip-text font-medium text-transparent"
        >
          @inspirebreda</a
        >
        om als eerste op de hoogte te zijn van onze acties, specials en ontwikkelingen!
      </p>
      <div class="w-full flex-shrink-0 rounded sm:w-auto">
        <a
          href="https://www.instagram.com/inspirebreda/"
          target="_blank"
          aria-label="instagram"
          class="flex w-full items-center justify-center rounded border border-transparent bg-instagram-blue py-1 px-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-instagram-blue/40 transition-colors duration-100 hover:bg-instagram-blue-dark hover:shadow-instagram-blue-dark/40 focus:bg-instagram-blue-dark focus:shadow-instagram-blue-dark/40 active:bg-instagram-blue active:shadow-instagram-blue/40"
        >
          View profile
        </a>
      </div>
    </div>
  </section>
</template>
