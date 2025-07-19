<template>
  <div v-auto-animate class="grid grid-cols-4 gap-5">
    <div v-for="sneaker in items" :key="sneaker._id">
      <Card :item="sneaker" />
    </div>
  </div>
</template>

<script setup>
import Card from './Card.vue'

defineProps({
  items: Array,
})
</script>
