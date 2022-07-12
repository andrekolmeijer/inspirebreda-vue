<script setup>
const imgUrl = new URL('../assets/img/carousel/carousel-1.jpg', import.meta.url).href

console.log(imgUrl);

const images = [
  {
    src: 'src/assets/img/carousel/carousel-1.jpg',
    span: 'col-span-4 row-span-2',
    alt: 'Twee maal Dark & Stormy cocktail'
  },
  {
    src: 'src/assets/img/carousel/carousel-2.jpg',
    span: 'col-span-3 row-span-2',
    alt: 'Twee White Russians die bereid worden'
  },
  {
    src: 'src/assets/img/carousel/carousel-3.jpg',
    span: 'col-span-5 row-span-2',
    alt: 'Jehan en Rob maken Espresso Martini'
  },
  {
    src: 'src/assets/img/carousel/carousel-4.jpg',
    span: 'col-span-4 row-span-2',
    alt: 'Inspire specialiteit C-star met kruidnoten'
  },
  {
    src: 'src/assets/img/carousel/carousel-5.jpg',
    span: 'col-span-4 row-span-2',
    alt: 'Een yogurt, lemon and lime swirl cake'
  },
  {
    src: 'src/assets/img/carousel/carousel-6.jpg',
    span: 'col-span-4 row-span-1',
    alt: 'Bovenverdieping Inspire Breda'
  },
  {
    src: 'src/assets/img/carousel/carousel-7.jpg',
    span: 'col-span-2 row-span-1',
    alt: 'Martini Espresso van bovenaf'
  },
  {
    src: 'src/assets/img/carousel/carousel-8.jpg',
    span: 'col-span-2 row-span-1',
    alt: 'Verse appeltaart'
  }
]
</script>

<template>
  <div
    class="flex h-[300px] snap-x snap-mandatory grid-cols-12 grid-rows-4 flex-row gap-3 overflow-x-auto scrollbar-hide sm:grid sm:h-[648px]">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="second:snap-start second:pl-8 sm:second:pl-0 h-full max-w-[300px] flex-shrink-0 snap-center snap-always last:snap-end last:pr-8 sm:max-w-none sm:last:pr-0"
      :class="image.span">
      <img
        class="h-full w-full rounded object-cover"
        :src="imgUrl"
        :alt="image.alt" />
    </div>
  </div>
</template>
