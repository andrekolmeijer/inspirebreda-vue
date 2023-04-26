<script setup>
// https://stackoverflow.com/questions/70591125/replacement-for-require-in-vuejs-3-with-vite-for-image-array

function getImageUrl(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

const menukaarten = [
  {
    href: '/menu/kaart-inspire-4-1.pdf',
    src: 'kaart-inspire-4-1.jpg',
    name: 'Lunchkaart'
  },
  {
    href: '/menu/kaart-inspire-4-2.pdf',
    src: 'kaart-inspire-4-2.jpg',
    name: 'Koffie & Warm'
  },
  {
    href: '/menu/kaart-inspire-4-9.pdf',
    src: 'kaart-inspire-4-9.jpg',
    name: 'Sap & Frisdrank'
  },
  {
    href: '/menu/kaart-inspire-4-3.pdf',
    src: 'kaart-inspire-4-3.jpg',
    name: 'Bierkaart'
  },
  {
    href: '/menu/kaart-inspire-4-4.pdf',
    src: 'kaart-inspire-4-4.jpg',
    name: 'Wijn & Bubbels'
  },
  {
    href: '/menu/kaart-inspire-4-5.pdf',
    src: 'kaart-inspire-4-5.jpg',
    name: 'Cocktails'
  },
  {
    href: '/menu/kaart-inspire-4-6.pdf',
    src: 'kaart-inspire-4-6.jpg',
    name: 'Cocktails'
  },
  {
    href: '/menu/kaart-inspire-4-7.pdf',
    src: 'kaart-inspire-4-7.jpg',
    name: 'Cocktails'
  },
  {
    href: '/menu/kaart-inspire-4-8.pdf',
    src: 'kaart-inspire-4-8.jpg',
    name: 'Cocktails'
  }
]
</script>

<template>
  <section
    id="menu"
    class="bg-inspire-orange text-inspire-white overflow-x-auto">
    <div class="m-auto pt-16 pb-8 overflow-x-auto">
      <div class="flex items-center space-x-6">
        <h2
          class="pl-8 text-2xl font-black uppercase tracking-normal lg:ml-auto">
          Menukaarten
        </h2>
        <span class="font-medium italic">Swipe Links <span class="hidden sm:inline-block">/ Shift + Scroll</span></span>
      </div>
      <ul
        class="flex snap-x snap-mandatory gap-6 overflow-x-auto py-8 scrollbar-hide z-50 relative">
        <li
          v-for="(menukaart, index) in menukaarten"
          :key="index"
          class="lg:first:pl-snap first:snap-start first:pl-8 flex h-full flex-shrink-0 snap-center snap-always justify-center last:snap-end last:pr-8">
          <a
            :href="menukaart.href"
            target="_blank">
            <img
              class="h-[450px] rounded-lg shadow-lg sm:h-auto sm:w-[550px]"
              :src="getImageUrl(menukaart.src)"
              :alt="menukaart.src" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
