<script setup>
import InstagramCall from './InstagramCall.vue'
import PhotoGrid from './PhotoGrid.vue'
import WelcomeText from './WelcomeText.vue'
import WelcomeBanner from './WelcomeBanner.vue'
</script>

<template>
  <section class="m-auto max-w-5xl text-inspire-brown-dark">
    <WelcomeBanner class="sm:mx-8" />
    <WelcomeText class="mx-8 mt-8" />
    <div class="sm:mx-8">
      <PhotoGrid class="my-4" />
    </div>
    <InstagramCall class="mb-8" />
  </section>
</template>
