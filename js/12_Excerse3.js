'use strict'

//Show the numbers between two numbers inserted by the user

let number1 = parseInt(prompt('Insert the first number', 0))
let number2 = parseInt(prompt('Insert the second number', 0))

while( isNaN(number1) || isNaN(number2) ){
    number1 = parseInt(prompt('Insert the first number', 0))
    number2 = parseInt(prompt('Insert the second number', 0))
    //debugger
}

document.write("<h2> From "+number1+ " to "+number2+ " are the netx numbers</h2>")

for(let i = number1; i <= number2; i++){
    document.write(i+'<br/>')
}

console.log(number1, number2)