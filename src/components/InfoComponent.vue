<template>
  <div class="">
    <div v-if="isCreated" class="flex flex-col items-center justify-center mt-60">
      <img src="/order-success-icon.png" height="100" width="100" alt="Info image" />
      <h2 class="mt-4 text-2xl font-medium">Заказ оформлен</h2>
      <p class="mt-2 text-gray-500 text-center">
        Ваш заказ <slot name="order-success"></slot> будет доставлен в течение 1-2 дней. Спасибо за
        покупку!
      </p>
    </div>
    <div v-else-if="isEmpty" class="flex flex-col items-center justify-center mt-60">
      <img src="/package-icon.png" height="100" width="100" alt="Info image" />
      <h2 class="mt-4 text-2xl font-medium">Корзина пуста</h2>
      <p class="mt-2 text-gray-500 text-center">
        Добавьте хотя бы один товар в корзину, чтобы оформить заказ.
      </p>
    </div>
    <div
      v-else-if="isEmptyFavorites"
      class="flex flex-col items-center justify-center h-full pb-40"
    >
      <img src="/emoji-1.png" height="100" width="100" alt="Info image" />
      <h2 class="mt-4 text-2xl font-medium">Избранное пусто</h2>
      <p class="mt-2 text-gray-500 text-center">Вы ничего не добавляли в избранное</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isCreated: {
    type: Boolean,
    default: false,
  },
  isEmpty: {
    type: Boolean,
    default: false,
  },
  isEmptyFavorites: {
    type: Boolean,
    default: false,
  },
})
</script>
