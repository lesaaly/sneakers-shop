<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-60"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-10 flex flex-col">
    <div class="flex items-center gap-5 mb-5">
      <svg
        @click="drawerActions.closeDrawer()"
        class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition hover:-translate-x-1"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h2 class="text-2xl font-bold">Корзина</h2>
    </div>

    <InfoComponent :is-created="isCreatingOrder" :is-empty="isEmpty">
      <template #order-success>
        <span class="font-bold">{{ orderId }}</span>
      </template>
    </InfoComponent>

    <div v-auto-animate class="flex flex-col gap-5 flex-1">
      <BusketItem v-for="item in choosed" :key="item._id" :item="item" />
    </div>

    <div v-if="!isEmpty && !isCreatingOrder" class="flex flex-col gap-3 my-6">
      <div class="flex gap-2 items-baseline">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ choosedPrice }} руб.</b>
      </div>
      <div class="flex gap-2 items-baseline">
        <span>Налог 5%:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ choosedTax }} руб.</b>
      </div>
    </div>

    <button
      v-if="!isEmpty && !isCreatingOrder"
      @click="createOrder"
      :disabled="isCreatingOrder"
      :class="{ 'opacity-50 cursor-not-allowed': isCreatingOrder }"
      class="bg-blue-400 w-full rounded-xl py-2 text-white hover:bg-blue-500 transition cursor-pointer active:bg-blue-600 disabled:bg-slate-300"
    >
      Оформить заказ
    </button>
  </div>
</template>

<script setup>
import BusketItem from './BusketItem.vue'
import { inject, computed, ref } from 'vue'
import { getChoosed, clearChoosed } from '../composables/useChoosed.js'
import axios from 'axios'
import InfoComponent from './InfoComponent.vue'

const drawerActions = inject('drawerActions')
const choosed = getChoosed
const isCreatingOrder = ref(false)
const isEmpty = computed(() => choosed.value.length === 0)
const orderId = ref(null)

const choosedPrice = computed(() => choosed.value.reduce((acc, item) => acc + item.price, 0))
const choosedTax = computed(() => Math.round(choosedPrice.value * 0.05) / 100)

const createOrder = async () => {
  try {
    const response = await axios.post('/orders', {
      products: getChoosed.value,
      totalPrice: choosedPrice.value,
      totalTax: choosedTax.value,
      totalPriceWithTax: choosedPrice.value + choosedTax.value,
    })
    orderId.value = response.data._id
  } catch (error) {
    console.log(error)
  } finally {
    isCreatingOrder.value = true
    clearChoosed()
  }
}
</script>
