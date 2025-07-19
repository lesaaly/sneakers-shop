<template>
  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold text-center">Все кроссовки</h2>

      <div class="flex gap-4">
        <select
          @change="onSortBy"
          class="py-2 px-3 border border-slate-200 rounded-md outline-none cursor-pointer"
        >
          <option value="name">По названию</option>
          <option value="price">По цене (сначала дешевые)</option>
          <option value="price-desc">По цене (сначала дорогие)</option>
        </select>

        <div class="relative">
          <img src="/search.svg" class="absolute left-4 top-3" alt="Search" />
          <input
            v-model="search"
            @input="debouncedFetchProducts"
            placeholder="Поиск"
            class="border border-slate-200 rounded-md py-2 pl-10 pr-4 outline-none focus:border-slate-400"
            type="text"
          />
        </div>
      </div>
    </div>

    <CardList class="mt-10" :items="products" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardList from '../components/CardList.vue'
import axios from 'axios'
import lodash from 'lodash'

const products = ref([])

const sortBy = ref('')
const search = ref('')

const onSortBy = (e) => {
  sortBy.value = e.target.value
  fetchProducts()
}

const fetchProducts = async () => {
  try {
    const params = {}
    if (sortBy.value) {
      params.sortBy = sortBy.value
    }
    if (search.value) {
      params.search = search.value
    }

    const response = await axios.get('/products', { params })
    products.value = response.data
  } catch (error) {
    console.log(error)
  }
}

const debouncedFetchProducts = lodash.debounce(fetchProducts, 700)

onMounted(() => {
  fetchProducts()
})
</script>
