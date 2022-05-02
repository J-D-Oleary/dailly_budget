const Bill = require('../models/models.bills')
const { reduceBills } = require('../utils/utils.summary')


module.exports.renderHome = (req, res, next) => {
  res.render('index')
}
module.exports.renderSummary = async (req, res, next) => {
  const bills = await Bill.find({})

  const { dateDue } = req.body
 
  let budget = reduceBills(bills)

  let today = new Date().getDate()
  // let twoWeeks = new Date(Date.now() + 12096e5).getDate()
  let dueDate = dateDue

  let billsDue = 0;

  if(today > dueDate){
    for(let i = today; i <= 31; i++){
      if(budget[i]){
        billsDue += parseInt(budget[i])
      }
    }
    for(let i = 0; i <= dueDate; i++)
      if(budget[i]){
        billsDue += parseInt(budget[i])
      }
  } else {
    for(let i = today; i <= dueDate; i++){
      if(budget[i]){
        billsDue += parseInt(budget[i])
      }
    }
  }

  res.render('index', {payload: billsDue})
}
