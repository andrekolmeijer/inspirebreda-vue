<script setup>
// https://stackoverflow.com/questions/70591125/replacement-for-require-in-vuejs-3-with-vite-for-image-array

function getImageUrl(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

const menukaarten = [
  {
    href: '/menu/lunch-1.pdf',
    src: 'lunch-1.jpg',
    name: 'Lunchkaart'
  },
  {
    href: '/menu/drank-1.pdf',
    src: 'drank-1.jpg',
    name: 'Koffie & Warm'
  },
  {
    href: '/menu/drank-2.pdf',
    src: 'drank-2.jpg',
    name: 'Sap & Frisdrank'
  },
  {
    href: '/menu/drank-3.pdf',
    src: 'drank-3.jpg',
    name: 'Bierkaart'
  },
  {
    href: '/menu/drank-4.pdf',
    src: 'drank-4.jpg',
    name: 'Wijn & Bubbels'
  },
  {
    href: '/menu/drank-5.pdf',
    src: 'drank-5.jpg',
    name: 'Cocktails'
  }
]
</script>

<template>
  <section
    id="menu"
    class="bg-inspire-orange text-inspire-white">
    <div class="m-auto max-w-5xl pt-16 pb-8">
      <h2
        class="w-full pl-8 text-2xl font-black uppercase tracking-normal sm:px-8 sm:text-center">
        Menukaarten
      </h2>
      <ul
        class="flex snap-x snap-mandatory gap-6 overflow-x-auto py-8 scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-9 sm:overflow-x-hidden sm:px-8 lg:grid-cols-3">
        <li
          v-for="(menukaart, index) in menukaarten"
          :key="index"
          class="first:snap-start first:pl-8 sm:first:pl-0 flex h-full flex-shrink-0 snap-center snap-always justify-center last:snap-end last:pr-8 sm:transition-transform sm:duration-200 sm:last:pr-0 sm:hover:scale-105">
          <a
            :href="menukaart.href"
            target="_blank">
            <div class="space-y-2">
              <img
                class="h-[300px] rounded-lg shadow-lg sm:transition-shadow sm:duration-200 sm:hover:shadow-xl"
                :src="getImageUrl(menukaart.src)"
                :alt="menukaart.name" />
              <span
                class="inline-block w-full text-center font-semibold"
                v-text="menukaart.name">
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
