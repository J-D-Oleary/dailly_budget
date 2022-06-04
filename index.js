const express = require('express')
const mongoose = require('mongoose')
const port = 5000
const billsRoutes = require('./routes/routes.bills.js')
const mainRoutes = require('./routes/routes.summary.js')
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/bill-tracker'
const engines = require('consolidate');

require('dotenv').config()

mongoose.connect(mongoUrl)

const app = express()
const db = mongoose.connection


app.set('views', __dirname + '/views');
app.engine('html', engines.ejs);
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname, + '/public'))


app.set('view engine', 'ejs');

db.on('error', console.error.bind(console, "MongoDB connection error"))
db.once('open', () => {
    console.log('Successful MongoDB connection')
})



app.use('/bills', billsRoutes)
app.use('/', mainRoutes)

app.listen(port, () => {
  console.log(`App is running on port: ${port}`)
})