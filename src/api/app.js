import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import productsRouter from './routes/products.js'
import ordersRouter from './routes/orders.js'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use(express.json())

mongoose
  .connect('mongodb://127.0.0.1:27000/sneaker_shop')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

app.use('/products', productsRouter)
app.use('/orders', ordersRouter)
app.listen(5000, () => console.log('Server is running on port 5000'))
