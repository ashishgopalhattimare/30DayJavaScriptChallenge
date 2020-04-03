console.log('Exercise: Level 1')

let word = '30 Days Of JavaScript'

console.log(" 2. " + word)           // Print in console
console.log(" 3. " + word.length)    // length of the word
console.log(" 4. " + word.toUpperCase())
console.log(" 5. " + word.toLowerCase())
console.log(" 6. " + word.substr(0, word.indexOf(' ')))
console.log(" 7. " + word.substr(word.indexOf(' ')+1))
console.log(" 8. " + word.includes('Script'))
console.log(" 9. " + "string".split(''))
console.log("10. " + word.split(' '))

let sentence = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let arr = sentence.split(',')
console.log("11. " + arr[1])

console.log("12. " + word.replace('JavaScript', 'Python'))
console.log("13. " + word.charAt(15))
console.log("14. " + word.charCodeAt(11))
console.log("21. " + word.startsWith('30 Days Of JavaScript'))
console.log("24. " + "30 Days of".concat(" JavaScript"))
console.log("25. " + word.repeat(2))