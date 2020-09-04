'use strict'

//to Show all the inpar number between to numbers inserted by the user

let number1 = parseInt(prompt('Insert the first number', 0))
let number2 = parseInt(prompt('Insert the second number', 0))

while( isNaN(number1) || isNaN(number2) ){
    number1 = parseInt(prompt('Insert the first number', 0))
    number2 = parseInt(prompt('Insert the second number', 0))
    //debugger
}

document.write("<h2> From "+number1+ " to "+number2+ " are the netx inpar numbers</h2>")

while(number1 < number2){
    number1++

    if(number1%2 != 0 ){
        document.write(number1+'<br/>')
    }
}