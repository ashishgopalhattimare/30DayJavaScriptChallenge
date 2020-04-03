// Function Declaration
function declare()
{
    // Code goes here
}
declare()

// In a function, we can pass different data types like string, boolean, Number,
// Object or even Function as parameters

// Function with Unlimited Parameters
function sumArray() {
    console.log(arguments)
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

// Anonlymous Functions | Expression Function
const anonymous = function() {
    console.log('Anonymous Function')
}

// Arrow Function
const functionName = (args = 'value') => {
    console.log('Arrow Function called')
    return 0
}

const modifyArray = function(arr) {

    if(arr.length < 5) return 'Not Found'
    
    arr[5-1] = arr[5-1].toUpperCase()
    return arr
}

const isPrime = (num) => {

    if(num == 1) return false

    for(let i = 2; i < num; i++) {
        if(num % i == 0)
            return false
    }
    return true
}

console.log(modifyArray(['Potato','Mango', 'Lemon','Carrot']))

const n = 18
console.log(`Is ${n} a prime number ? ${isPrime(n)}`)