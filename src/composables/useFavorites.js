import { ref, computed } from 'vue'

const favorites = ref([])

const loadFavorites = () => {
  const saved = localStorage.getItem('favorites')
  if (saved) {
    favorites.value = JSON.parse(saved)
  }
}

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites.value))
}

loadFavorites()

const addToFavorites = (product) => {
  if (!favorites.value.find((item) => item._id === product._id)) {
    favorites.value.push(product)
    saveFavorites()
  }
}

const removeFromFavorites = (productId) => {
  favorites.value = favorites.value.filter((item) => item._id !== productId)
  saveFavorites()
}

const isFavorite = (productId) => {
  return favorites.value.some((item) => item._id === productId)
}

const toggleFavorite = (product) => {
  if (isFavorite(product._id)) {
    removeFromFavorites(product._id)
  } else {
    addToFavorites(product)
  }
}

const getFavorites = computed(() => favorites.value)

export { addToFavorites, removeFromFavorites, isFavorite, toggleFavorite, getFavorites }
