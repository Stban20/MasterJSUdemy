'use strict'

//Break
// works to broke a bucle if another condition happend

let year = 2020

while(year != 1989){        //while year is then runs the code
    console.log('The year is' + year)

    year--                  // decrement the variable year everytime that excute itself
    if(year == 2000){       // if this happen
        break               // the break finesh the bucle
    }   

}