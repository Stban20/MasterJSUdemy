'use strict'

//to Show all the division numbers from the number inserted by the user

let number = parseInt(prompt('Insert the first number', 0))


while( isNaN(number)  ){
    number = parseInt(prompt('Insert the first number', 0))

}

document.write("<h2> From "+number+ " there are the divisor numbers</h2>")

for(let i = 1; i <= number; i++){

    if(number%i == 0){
        document.write(i+'<br/>')
    }
}