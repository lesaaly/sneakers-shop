import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  totalPrice: Number,
  totalTax: Number,
  totalPriceWithTax: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Order', orderSchema)
