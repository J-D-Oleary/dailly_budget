const express = require('express')
const router = express.Router()
const summary = require('../controllers/controllers.summary.js')

router.route('/')
  .get(summary.renderHome)
  .post(summary.renderSummary)

module.exports = router