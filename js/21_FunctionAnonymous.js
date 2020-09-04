'use strcit'

//Anonymous functions
// Function that does not have name

function sumAction (num1, num2, sumAndShow, sumXTwo){   //sumAndShow and sumXTow are parameters and callbacks functions
    let sum = num1 + num2
    
    sumAndShow(sum)                         //call the functions 
    sumXTwo(sum)
}

sumAction(5, 7, function(data){             //function the callback anonymous
    console.log('The sum is: ', data)
}, 
data =>{                            //function the callback anonymous type arrow
    console.log('The sum x two is: ', (data*2))
})

