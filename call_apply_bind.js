var person1 = {
    name : 'vinay',
    city : 'mumbai'
}

var person2 = {
    name : 'vishal',
    city : 'pune'
}

var position = {
    designation : 'software developer',
    salary      : 6,
    doj         : 'today'
}

var screening = function(person){
    return `
    person name : ${person.name}
    D.O.J       : ${this.doj}
    Sal         : ${this.salary}
    Designation : ${this.designation}
    City        : ${person.city}`
}

console.log(screening.call(position,person1))
console.log(screening.apply(position,[person1])) /*same as call,but array of arguments*/

var screeningFunc = screening.bind(position) /*bind returns a function*/
console.log(screeningFunc(person1))
