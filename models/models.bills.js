const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BillSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  dayOfMonth: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Bill', BillSchema)