const numbers = [1, 2, 3, 4, 5];
console.log("Ejemplo 1: Impriomiendo los elementos de una lista")
numbers.forEach(num => console.log(num))

let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => sum += num)
console.log("Ejemplo2: Calculo de la suma de los elementos de la lista")
console.log(sum)

const countries = ['Mexico', 'Francia', 'Japon', 'Alemania', 'Corea']
console.log("Ejemplo 5: Imprimiendo la lista de paises en mayuscula")
countries.forEach((element) => console.log(element.yoUpperCase()))

const number4 = [1, 2, 3, 4, 5]
const numbersSquare = number4.map(function(num){ return num * num})

console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())

console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(namesToUpperCase)

const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3))
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)

const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => 
country.includes('land'))

console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en i")
console.log(countriesEndsByia)

const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty)

const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') 
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)

const scores12 = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const score_less_than_80 = scores12.find((user) => user.score > 80)
  console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)

const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)

const bools = [true, true, false, true]
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())

const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]

users.sort((a, b) => { 
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(users)