'use strcit'

let sum = 0;
let count = 0;
// let number = 0;

do{
    var number = parseInt(prompt('Insert a number', 0)); //the variable must be declared with var to use it outside of the block

    if(isNaN(number)){
        number = 0
    } else if(number >= 0){
        sum = sum + number
        count++
    }
    console.log(sum)
    console.log(count)
}while( number >= 0 )

alert('The sum is: ' + sum)
alert('The average is: ' + (sum/count))
