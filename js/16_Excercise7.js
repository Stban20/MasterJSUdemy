'use strict'

//to Show if the number is par or inpar from the number inserted by the user

let number = parseInt(prompt('Insert the number', 0))


while( isNaN(number)  ){
    number = parseInt(prompt('Insert a valid number', 0))

}

document.write("<h2> Check if the number is Paar or Inpaar</h2>")


    if(number%2 != 0){
        document.write('The number is Inpaar')
    }else{
        document.write('The number is Paar')
    }


