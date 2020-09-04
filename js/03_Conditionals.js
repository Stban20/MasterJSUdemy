'use strict'

//Conditionals if comparation
// if a is equal to b do something

let ageAdult = 17
let age = 33

//if this happend
if(age > ageAdult){
    // do this
    console.log('You are Adult')
    if(age >= 30){
    console.log('You are from the 80s')
    }
} else {
    console.log('You are Children')
}

// Logic Operators 
/*
AND: &&
OR: ||
Negacion: !

*/
let year = 2019

if(year < 2020 && year >= 2012){
    console.log('We survive to Mayas prediction')
} else {
    console.log('We are in the pandemic')
}

if(year <= 2020 || (year ==2020 && year >= 2021)){
    console.log('We are close to have pandemic')
}else{
    console.log('We are in the pandemic')
}

console.log('Everthing runed')