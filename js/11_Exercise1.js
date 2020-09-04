'use strict'

// Proram asking to numbers and the give if they are equal, mayou o minor.

let number1 = parseInt(prompt('Insert the first number', 0))
let number2 = parseInt(prompt('Insert the second number', 0))

console.log(number1, number2)

while( number1 <= 0 || number2 <= 0 || isNaN(number1) || isNaN(number2) ){
    number1 = parseInt(prompt('Insert the first number', 0))
    number2 = parseInt(prompt('Insert the second number', 0))
    //debugger
}

if(number1 == number2){
    console.log('The numbers are equal')
} else if(number1 < number2){   
    console.log('The second number: '+ number2 +' is mayor than the first number ' + number1)
}else if(number1 > number2){
console.log('The first number: '+ number1 +' is mayor than the second number ' + number2)
}else{
    console.log('Insert a valid number')
}