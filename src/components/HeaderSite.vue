<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <div class="flex items-center gap-4 cursor-pointer" @click="$router.push('/')">
      <img src="/logo.svg" alt="Logo" class="w-10 h-10" />
      <div class="">
        <h2 class="text-xl font-bold uppercase">Sneakers</h2>
        <p class="text-slate-500">Магазин кроссовок</p>
      </div>
    </div>
    <ul class="flex items-center gap-8">
      <li
        @click="$emit('openDrawer')"
        class="flex gap-2 items-center text-gray-500 hover:text-black cursor-pointer"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ choosedPrice }} руб.</b>
        <span
          v-if="choosedCount > 0"
          class="bg-green-500 text-white rounded-full px-2 py-1 text-xs"
        >
          {{ choosedCount }}
        </span>
      </li>
      <li
        class="flex gap-2 items-center text-gray-500 hover:text-black cursor-pointer"
        @click="$router.push('/favorites')"
      >
        <img src="/heart.svg" alt="Liked" />
        <span>Избранное</span>
        <span
          v-if="favoritesCount > 0"
          class="bg-blue-500 text-white rounded-full px-2 py-1 text-xs"
        >
          {{ favoritesCount }}
        </span>
      </li>
      <!-- <li class="flex gap-2 items-center text-gray-500 hover:text-black cursor-pointer">
        <img src="/profile.svg" alt="Profile" />
        <span>Профиль</span>
      </li> -->
    </ul>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { getFavorites } from '../composables/useFavorites.js'
import { getChoosed } from '../composables/useChoosed.js'

const favorites = getFavorites
const choosed = getChoosed
const favoritesCount = computed(() => favorites.value.length)
const choosedCount = computed(() => choosed.value.length)
const choosedPrice = computed(() => choosed.value.reduce((acc, item) => acc + item.price, 0))

defineEmits(['openDrawer'])
</script>
