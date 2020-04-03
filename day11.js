const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = 
{
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = 
[
    {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
    },
    {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
    },
    {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
    },
    {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
    },
    {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
    }
]

console.log('Exercises: Level 1\n\n')

let [e,pi,gravity,humanBodyTempmwaterBoilingTemp] = constants
console.log(e,pi,gravity,humanBodyTempmwaterBoilingTemp)

let {width: w, area: a, height: h, perimeter: p} = rectangle
console.log(w, h, a, p)

console.log('Exercises: Level 2\n\n')

console.log('Print Users having less than 2 skills')
for (const {name, scores, skills, age} of users) {
    if(skills.length < 2)
    console.log(name, scores, skills, age)
}
console.log('')

console.log('Exercises: Level 3\n\n')

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [name, skills, [ , , jsSCore, reactScore]] = student
console.log(name, skills, jsSCore, reactScore);
console.log('')

const students = 
[
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log('Write a function \'convertArrayToObject\' which can convert the array to structure object')

const convertArrayToObject = (students) => {
    
    let structuredObject = []

    for (const student of students) {
        let [name, skills, scores] = student

        const obj = {
            'name'  : name,
            'skills': skills,
            'scores': scores
        }
        structuredObject.push(obj)
    }
    
    return structuredObject;
}
console.log(convertArrayToObject(students)); console.log('')

const studentObj = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd:
        [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd:
        [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:
        [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

const copiedStudent = {...studentObj}

copiedStudent.skills.frontEnd.push({'skill':'Bootstrap', 'level': 8})
copiedStudent.skills.backEnd.push({'skill':'Express', 'level': 9})
copiedStudent.skills.dataBase.push({'skill':'SQL', 'level': 8})
copiedStudent.skills.dataScience.push('SQL')

console.log(copiedStudent);