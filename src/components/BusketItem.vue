<template>
  <div class="border border-slate-200 p-4 rounded-xl flex items-center gap-4">
    <img :src="item.imageUrl" alt="Sneaker" class="w-16 h-16" />

    <div class="flex flex-col w-full">
      <p>{{ item.title }}</p>

      <div class="flex justify-between mt-2">
        <b>{{ item.price }} руб.</b>
        <img
          src="/close.svg"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          @click="removeFromChoosed(item._id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { removeFromChoosed } from '../composables/useChoosed.js'

defineProps({
  item: Object,
})
</script>
