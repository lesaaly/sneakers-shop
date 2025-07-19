import express from 'express'
import Product from '../models/product.js'
const router = express.Router()

// GET /products
router.get('/', async (req, res) => {
  try {
    const { sortBy, search } = req.query
    let query = {}

    // Поиск по названию
    if (search) {
      query.title = { $regex: search, $options: 'i' }
    }

    let sortOptions = {}

    // Сортировка
    switch (sortBy) {
      case 'name':
        sortOptions.title = 1
        break
      case 'price':
        sortOptions.price = 1
        break
      case 'price-desc':
        sortOptions.price = -1
        break
      default:
        sortOptions.title = 1
    }

    const products = await Product.find(query).sort(sortOptions)
    res.json(products)
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error)
    res.status(500).json({ error: 'Ошибка при получении продуктов' })
  }
})

// GET /products/:id
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
})

export default router
