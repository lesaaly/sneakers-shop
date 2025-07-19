import express from 'express'
import Order from '../models/order.js'
const router = express.Router()

// GET /orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('products')
    res.json(orders)
  } catch (error) {
    console.error('Ошибка при получении заказов:', error)
    res.status(500).json({ error: 'Ошибка при получении заказов' })
  }
})

// GET /orders/:id
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('products')
    res.json(order)
  } catch (error) {
    console.error('Ошибка при получении заказа:', error)
    res.status(500).json({ error: 'Ошибка при получении заказа' })
  }
})

// POST /orders
router.post('/', async (req, res) => {
  try {
    const { products, totalPrice, totalTax, totalPriceWithTax } = req.body
    const order = new Order({
      products,
      totalPrice,
      totalTax,
      totalPriceWithTax,
    })
    await order.save()
    res.json(order)
  } catch (error) {
    console.error('Ошибка при создании заказа:', error)
    res.status(500).json({ error: 'Ошибка при создании заказа' })
  }
})

export default router
