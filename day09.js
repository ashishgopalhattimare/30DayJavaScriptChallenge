// arr = [1,2,3,4,5]

// FOR-EACH

// For-each only works with arrays. It takes a callback function with
// (element, index, arr) itself -> index and array are optional
// arr.forEach((element) => console.log(element));

// let sum = 0
// arr.forEach((element) => sum += element) // Iterate every element
// console.log(sum)

// MAP
// Iterate an array elements and modify the array elements. It takes a
// callback function with element and index as parameters and returns
// a new array

// const num = [4,5,6,7,8]
// const numSquare = num.map((x) => x * x) // Iterate every element with modify
// console.log(numSquare)


// FILTER
// Filter out items which full filtering conditions and return a new array

// const countries = 
// [   'Albania','Bolivia','Canada','Denmark','Ethiopia','Finland',
//     'Germany','Hungary','Ireland','Japan','Kenya'
// ]

// const filterLand = countries.filter((country, index) => {
//     return country.includes('land')
// })
// console.log(filterLand)

// const filterSize = countries.filter((country, index) => {
//     return country.length === 5
// })
// console.log(filterSize)


// REDUCE
// Reduce takes a callback function. The call back takes a accumulator
// and a current value as parameter and return a single value
// WHEN WE NEED TO ITERATE OVER ALL THE VALUES AND REDUCE TO A SINGLE VALUE

// const nums = [1,2,3,4,5]
// let sumCube = nums.reduce((accum, curr) => {
//     return accum + curr**3
// })
// console.log(sumCube)

// const numarr = [107,5,4,3,2,1]
// numarr.sort((a, b) => {
//     if(a < b) return -1
//     return 1
// })
// console.log(numarr)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

console.log(' 3. Use foreach to console.log each country in countries array')
countries.forEach((element, index) => {
    console.log(index, element)
})
console.log('')

console.log(' 6. Use map to create a new array of countries length from countries array')
let countryLen = []
countries.map((element, index) => {
    countryLen.push(element.length)
})
console.log(countryLen); console.log('')

console.log('14. Use filter to filter out country start with \'N\'')
const startWithE = countries.filter((element, index) => {
    return element.startsWith('N')
})
console.log(startWithE); console.log('')

console.log('14. Use filter to filter out only prices with value')
let priceArr = []
products.filter((element, index) => {
    return (typeof element.price) == "number"
}).forEach((element) => priceArr.push(element.price))
console.log(priceArr); console.log('')