const Bill = require('../models/models.bills')

module.exports.renderBills = async (req, res, next) => {
  const bills = await Bill.find({})

  res.json(bills)
  next();
}

module.exports.createBill = async (req, res, next) => {
  
  const { title, dayOfMonth, price } = req.body

  const bill = new Bill({
    title: title,
    price: price,
    dayOfMonth: dayOfMonth
  })

  const savedBill = await bill.save(bill)

  res.json(savedBill)

  next();
}