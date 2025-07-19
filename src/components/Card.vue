<template>
  <div
    class="relative border border-slate-200 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition"
  >
    <img
      :src="isItemFavorite ? '/like-2.svg' : '/like-1.svg'"
      class="absolute top-8 left-8"
      @click="onClickFavorite"
    />
    <img :src="item.imageUrl" alt="Photo" class="w-full h-48 object-cover rounded-xl" />
    <p class="mt-2">{{ item.title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <b>{{ item.price }} руб.</b>
      </div>
      <img :src="isItemChoosed ? '/checked.svg' : '/plus.svg'" alt="Plus" @click="onClickChoosed" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { isFavorite, toggleFavorite } from '../composables/useFavorites.js'
import { isChoosed, toggleChoosed } from '../composables/useChoosed.js'

const props = defineProps({
  item: Object,
})

const isItemFavorite = computed(() => isFavorite(props.item._id))
const isItemChoosed = computed(() => isChoosed(props.item._id))

const onClickFavorite = () => {
  toggleFavorite(props.item)
}

const onClickChoosed = () => {
  toggleChoosed(props.item)
}
</script>
