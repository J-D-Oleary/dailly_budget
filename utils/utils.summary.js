const reduceBills = (arr) => {
  let budget = new Array(31)

  for(let el of arr){
    budget[el.dayOfMonth]
    ? budget[el.dayOfMonth].push(el.price)
    : budget[el.dayOfMonth] = [el.price]
  }

  budget = budget.map((b) => {
    let sum = 0
    for(let val of b){
      sum += val
    }
    b = [sum]
    return b
  })

  return budget
}

module.exports = {
  reduceBills
}