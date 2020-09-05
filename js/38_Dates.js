'use strict'

//Dates
let date = new Date()
console.log(date)

let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()
let hour = date.getHours()

let textDate = `
    The year is: ${year}
    The month is: ${month}
    The day is: ${day}
    The hour is: ${hour}
`

console.log(textDate)

//Maths
//Function Maths that could be use to simplyfy some operations
console.log(Math.ceil((Math.random()*10000))) 
//Math.ceil return number rounded upwards to the nearest integer
//Math.random return a random number between 0 and 1

