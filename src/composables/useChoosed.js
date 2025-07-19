import { ref, computed } from 'vue'

const choosed = ref([])

const loadChoosed = () => {
  const saved = localStorage.getItem('choosed')
  if (saved) {
    choosed.value = JSON.parse(saved)
  }
}

const saveChoosed = () => {
  localStorage.setItem('choosed', JSON.stringify(choosed.value))
}

loadChoosed()

const addToChoosed = (product) => {
  if (!choosed.value.find((item) => item._id === product._id)) {
    choosed.value.push(product)
    saveChoosed()
  }
}

const removeFromChoosed = (productId) => {
  choosed.value = choosed.value.filter((item) => item._id !== productId)
  saveChoosed()
}

const isChoosed = (productId) => {
  return choosed.value.some((item) => item._id === productId)
}

const toggleChoosed = (product) => {
  if (isChoosed(product._id)) {
    removeFromChoosed(product._id)
  } else {
    addToChoosed(product)
  }
}

const clearChoosed = () => {
  choosed.value = []
  saveChoosed()
}

const getChoosed = computed(() => choosed.value)

export { addToChoosed, removeFromChoosed, isChoosed, toggleChoosed, getChoosed, clearChoosed }
