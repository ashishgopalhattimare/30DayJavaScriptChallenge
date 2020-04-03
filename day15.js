class Animal
{
    constructor(color, name, legs, age)
    {
        this.color = color
        this.name = name
        this.legs = legs
        this.age = age
    }

    // Getters
    get getColor()      { return this.color }
    get getName()   { return this.name  }
    get getLegs()   { return this.legs  }
    get getAge()    { return this.age   }

    // Setters
    set setColor(x) { this.color = x    }
    set setName(x)  { this.name = x     }
    set setLegs(x)  { this.legs = x     }
    set setAge(x)   { this.age = x      }
}

class Cat extends Animal {}

class Dog extends Animal {}

let dog = new Dog('Brown', 'Alpha', 4, 5)

dog.setName = 'Alpha2'
console.log(dog.getName)
console.log(dog)