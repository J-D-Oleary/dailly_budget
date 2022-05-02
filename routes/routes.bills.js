const express = require('express')
const router = express.Router()
const bills = require('../controllers/controllers.bills.js')

router.route('/')
  .get(bills.renderBills)
  .post(bills.createBill)

router.route('/:id')
  //.put(bills.editBill)
  //.delete(bills.deleteBill)

module.exports = router