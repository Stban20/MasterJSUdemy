'use strict'

//Transfor text string

let number = 55
let text1 = 'Welcome to learn JavaScript     '
let text2 = 'We are learnign a lot'



let data = number.toString()            //change number to String
    data = text1.toLowerCase()    //change the text to lowercase
    data = text2.toUpperCase()          //change to capital letters

console.log(data)

// Calculate long 

let name = 'Sergio Acosta'

console.log(name.length)

//Concanate

let totalText = text1+', '+text2

console.log(totalText)

let totalText2 = text1.concat(', '+text2)

console.log(totalText2)

// Search Methods

let search = text1.indexOf('learn')     //Search the word and return the number where the text start
let search1 = text1.search('learn')     //Search the word and return the number where the text start
let search2 = text1.match('learn')     //return an array with the words to search, 
let search3 = text1.substr(11, 5)     //substrae the next 5 characters from the position 11
let search4 = text1.charAt(12)     //substrae one letter
let search5 = text1.startsWith('Wel')     //Search at the beginin of the string and return true or false
let search6 = text1.includes('learn')     //Search if the word is in the string and return true or false

//Replace methods

let search7 = text1.replace('learn', 'Master')     //Search if the word is in the string and replace it with the second parameter
let search8 = text1.slice(10, 22)                  //cut from the first parameter until the second parameter
let search9 = text1.split()                  //put al the string in an array
let search10 = text1.split(' ')                  //with the parameter inside cut the words in each space and put them into an array
let search11 = text1.trim()                  //delete the spaces from the beginin and the end of the string

console.log(search10)