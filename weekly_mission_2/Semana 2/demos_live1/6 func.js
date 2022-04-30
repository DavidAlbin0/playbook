const sum_one_hundred = function(n){
	return n + 100
}

console.log(sum_one_hundred)

console.log(sum_one_hundred(5)) 

const multiplier_function = function(function_to_apply, number) {
  return function_to_apply(number) * number
}

console.log(multiplier_function(sum_one_hundred, 5)) 

const numbers = [1, 2, 3, 4]

const sumArray = (arr) => { 
  let total = 0 

  const sumElementToTotal= (element) => { 
    total += element 
  } 

  arr.forEach(sumElementToTotal) 
  return total
}

console.log(sumArray(numbers))

const numbers_list = [1, 2, 3, 4]
const sumArray2 = (numbers_list) => {
  let total = 0
  numbers_list.forEach(function(element) { 
  })
  return total
}

console.log(sumArray2(numbers))