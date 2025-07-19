<template>
  <div class="">
    <div class="p-10">
      <div class="flex items-center gap-4">
        <img
          src="/arrow-right.svg"
          alt="Back"
          class="border border-slate-200 cursor-pointer p-3 rounded-xl rotate-180"
          @click="$router.push('/')"
        />
        <h2 class="text-3xl font-bold text-center">Избранное</h2>
      </div>

      <CardList class="mt-10" :items="favorites" />
    </div>

    <InfoComponent :is-empty-favorites="favorites.length === 0" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { getFavorites } from '../composables/useFavorites.js'
import CardList from '../components/CardList.vue'
import InfoComponent from '../components/InfoComponent.vue'

const favorites = ref([])

onMounted(() => {
  favorites.value = getFavorites.value
})

watch(getFavorites, () => {
  favorites.value = getFavorites.value
})
</script>
