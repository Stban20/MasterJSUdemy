'use strict'

// Function try-catch to catch the errors
//Put in the try the code that could fail and if someting get worng 
//the catch will catch the error

try {
    let year = 2019
    alert(year)      //error typing the variable
} catch (error) {
    console.log(error)
    alert('Something got wrong in the code')
}