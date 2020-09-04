'use strict'


//Calculator
/*
Ask for two number
To show in the body of the page , an alert and console, the
sum, rest, multiplication and division of the inserted number by the user
*/

let number1 = parseInt(prompt('Insert the first number', 0))
let number2 = parseInt(prompt('Insert the second number', 0))

while( isNaN(number1) || isNaN(number2) ){
    number1 = parseInt(prompt('Insert the first number', 0))
    number2 = parseInt(prompt('Insert the second number', 0))
}

let answer = "<p> The sum is: "+(number1+number2)+"</p>" +
                "<p> The rest is: "+(number1-number2)+"</p>"+
                "<p> The multiplication is: "+(number1*number2)+"</p>"+
                "<p> The division is: "+(number1/number2)+"</p>"

let answerCMD = "The sum is: "+(number1+number2)+'\n' +
                "The rest is: "+(number1-number2)+'\n'+
                "The multiplication is: "+(number1*number2)+'\n'+
                "The division is: "+(number1/number2)+'\n'

document.write(answer)
alert(answerCMD)
console.log(answerCMD)


// document.write("<p> The sum between number1: "+number1+ " and number2: "+number2+ " is: "+(number1+number2)+"</p>")
// console.log("The sum between number1: "+number1+ " and number2: "+number2+ " is: "+(number1+number2))
// alert("The sum between number1: "+number1+ " and number2: "+number2+ " is: "+(number1+number2))

// document.write("<p> The rest between number1: "+number1+ " and number2: "+number2+ " is: "+(number1-number2)+"</p>")
// console.log("The rest between number1: "+number1+ " and number2: "+number2+ " is: "+(number1-number2))
// alert("The rest between number1: "+number1+ " and number2: "+number2+ " is: "+(number1-number2))

// document.write("<p> The multiplication between number1: "+number1+ " and number2: "+number2+ " is: "+(number1*number2)+"</p>")
// console.log("The mutiplication between number1: "+number1+ " and number2: "+number2+ " is: "+(number1*number2))
// alert("The multiplication between number1: "+number1+ " and number2: "+number2+ " is: "+(number1*number2))

// document.write("<p> The division between number1: "+number1+ " and number2: "+number2+ " is: "+(number1/number2)+"</p>")
// console.log("The division between number1: "+number1+ " and number2: "+number2+ " is: "+(number1/number2))
// alert("The division between number1: "+number1+ " and number2: "+number2+ " is: "+(number1/number2))