'use strict'

//Functions
//IT's a group reusable of a instructions 


function message(){                     //name of the function
    console.log('Hello I am the messge')
    return 'Hello I"am the messge'  //if you have a return is better not to print something before
}

message()            //calling the function
message()            //you can call anytime


// Parameters
/*
function calculator(number1, number2){          //the parameters are inside of the ()
    console.log('Sum: '+(number1+number2))
    console.log('Rest: '+(number1-number2))
    console.log('Multiplication: '+(number1*number2))
    console.log('Division: '+(number1/number2))
    console.log('**************************************')
      //if you have a return is better not to print something before
}

calculator(4,3)            //calling the function
calculator(11,76)            //calling the function
*/
/*
function calculator1(number3, number4){          //the parameters are inside of the ()
    console.log('Sum: '+(number3+number4))
    console.log('Rest: '+(number3-number4))
    console.log('Multiplication: '+(number3*number4))
    console.log('Division: '+(number3/number4))
    console.log('--------------------------------')
      //if you have a return is better not to print something before
}

for(let i = 1; i <= 10; i++){
    console.log(i)
    calculator1(i,8)

}
*/

//Optional Parameters

/*
function calculator1(number3, number4, show = false){          //the parameters are inside of the ()

    if(show == false){
        console.log('Sum: '+(number3+number4))
        console.log('Rest: '+(number3-number4))
        console.log('Multiplication: '+(number3*number4))
        console.log('Division: '+(number3/number4))
        console.log('////////////////////////////')
    } else{
        document.write('Sum: '+(number3+number4)+'<br/>')
        document.write('Rest: '+(number3-number4)+'<br/>')
        document.write('Multiplication: '+(number3*number4)+'<br/>')
        document.write('Division: '+(number3/number4)+'<br/>')
        document.write('////////////////////////////'+'<br/>')
    }
}
calculator1(5,8)
calculator1(88,20, true)
*/


// Function inside other functions

function showingbyConsole(number3, number4){
    console.log('Sum: '+(number3+number4))
    console.log('Rest: '+(number3-number4))
    console.log('Multiplication: '+(number3*number4))
    console.log('Division: '+(number3/number4))
    console.log('////////////////////////////')
}

function showingbyScreen(number3,number4){
    document.write('Sum: '+(number3+number4)+'<br/>')
    document.write('Rest: '+(number3-number4)+'<br/>')
    document.write('Multiplication: '+(number3*number4)+'<br/>')
    document.write('Division: '+(number3/number4)+'<br/>')
    document.write('////////////////////////////'+'<br/>')
}


function calculator1(number3, number4, show = false){          //the parameters are inside of the ()

    if(show == false){
        showingbyConsole(number3,number4)
    } else{
        showingbyScreen(number3,number4)
    }
}

calculator1(5,8)
calculator1(7,4, true)