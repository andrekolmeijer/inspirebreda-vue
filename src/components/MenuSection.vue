<script setup>
import { useDataStore } from '../stores/DataStore'

const dataStore = useDataStore()
const menukaarten = dataStore.menukaarten
</script>

<template>
  <section
    id="menu"
    class="bg-inspire-orange text-inspire-white"
  >
    <div class="m-auto max-w-5xl pt-16 pb-8">
      <h2 class="w-full pl-8 text-2xl font-black uppercase tracking-normal sm:px-8 sm:text-center">Menukaarten</h2>
      <ul
        class="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto py-8 sm:grid sm:grid-cols-2 sm:gap-9 sm:overflow-x-hidden sm:px-8 lg:grid-cols-3"
      >
        <li
          v-for="(menukaart, index) in menukaarten"
          :key="index"
          class="flex h-full flex-shrink-0 snap-center snap-always justify-center last:snap-end last:pr-8 second:snap-start second:pl-8 sm:transition-transform sm:duration-200 sm:last:pr-0 sm:hover:scale-105 sm:second:pl-0"
        >
          <a
            :href="menukaart.href"
            target="_blank"
          >
            <div class="space-y-2">
              <img
                class="h-[300px] rounded-lg shadow-lg sm:transition-shadow sm:duration-200 sm:hover:shadow-xl"
                :src="menukaart.src"
                :alt="menukaart.name"
              />
              <span
                class="inline-block w-full text-center font-semibold"
                v-text="menukaart.name"
              >
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
