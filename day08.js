// Window Scope : Is available in the Window
// Global Scope : Can be accessed every where in the same file
// Local Scope  : 

const Dog =
{
    name : 'Flexi',
    legs : 4,
    color: 'black',
    age  : 4,

    bark : function() {
        return 'woof woof'
    }
}
const copy = Object.assign({}, Dog)
console.log(Dog)

Dog.getDogInfo = function() {
    console.log('Dog Info')
}
Dog.breed = 'Labrador'

console.log(Dog)

