<script setup>
import { useDataStore } from '../stores/DataStore'

const { openingstijdenNotitie } = useDataStore()
</script>

<template>
  <p
    class="mt-8 text-sm font-light italic text-inspire-brown-dark">
    <span v-text="openingstijdenNotitie.notitie"></span>
  </p>
</template>
