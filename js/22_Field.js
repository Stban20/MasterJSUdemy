'use strict'

//Field "Ambitos"
// The variable defined inside a block cannot be called from outside of the block

function message(text){
    let message2 = 'Text inside the function'       //variable defined inside the block
    console.log(text)
    console.log(number)
    console.log(message2)
}

var text = 'Text out of the function'
var number = 12
message(text)
//console.log(message2)           // this variable cannot be called from outsite of the block
