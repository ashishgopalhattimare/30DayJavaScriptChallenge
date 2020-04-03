const agree = confirm('Do you want to run Day 3 of JavaScript 30?')

if(agree == true)
{
    console.log('Exercses: Level 2\n\n')

    let base = (Number)(prompt('Enter base: '))
    let height = (Number)(prompt('Enter height: '))
    console.log('Enter base: ' + base)
    console.log('Enter height: ' + height)
    console.log(`The area of the triangle is ${base*height}`)

    console.log('')

    let side_a = (Number)(prompt('Enter side a: '))
    let side_b = (Number)(prompt('Enter side b: '))
    let side_c = (Number)(prompt('Enter side c: '))
    console.log(`Enter side a: ${side_a}\nEnter side b: ${side_b}\nEnter side c: ${side_c}`)
    console.log('The perimeter of the triangle is ' + (side_a+side_b+side_c))

    console.log('')

    let name = prompt('Enter your name: ')
    console.log(`Your name length is ${name.length}`)
    if (name.length < 7)
        console.log('Your name is Short')
    else if(name.length == 7) 
        console.log('Your name is Okay')
    else console.log('Your name is Long')

    console.log('')

    let myAge = (Number)(prompt('What is my age: '))
    let yourAge = (Number)(prompt('What is your age: '))
    console.log(`let myAge = ${myAge}\nlet yourAge = ${yourAge}`)
    if(myAge >= yourAge) {
        console.log(`I am ${myAge-yourAge} older than you.`)
    }
    else console.log(`You are ${yourAge-myAge} older than me.`)

    console.log('')

    let years = (Number)(prompt('Enter number of yours you live: '))

    const seconds = 100*365*24*60*60
    console.log(`You lived more than ${seconds} seconds.`)

    console.log('')

    console.log('Exercises: Level 3\n\n')

    function format(month, limit) {
        return month >= limit ? "" + month : "0" + month;
    }

    const now = new Date()

    // YYYY-MM-DD HH:mm format
    console.log(`${now.getFullYear()}-${format(now.getMonth()+1, 10)}-${format(now.getDate(), 10)} \
    ${format(now.getHours(), 10)}:${format(now.getMinutes(), 10)}`)
}