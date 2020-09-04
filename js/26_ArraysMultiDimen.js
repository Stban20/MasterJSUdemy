'use strict'

//Array inside another array

let categories = ['Action','Horror','Comedy']
let films = ['F&F','Matrix','Batman']

// Organize Arrays

categories.sort()               //Organize the array in alphabetic order
//categories.reverse()          // Turn around the array
console.log(categories)

//let theater = [categories,films]

//console.log(theater)
//console.log(theater[0][1])
//console.log(theater[1][2])

//Operation within arrays

//films.push('Batman')        //inset the value in the end of the array

/* -------Exercise to insert new values in the array asking with a prompt
let newElement =''

do{
    newElement = prompt('Insert your favorite film')
    films.push(newElement)
}while(newElement != 'FINISH')

console.log(films)
*/

/*---Exercise to delete a specific value inside of an array

let item = films.indexOf('Matrix')
console.log(item)
if(item > -1){
    films.splice(item, 1)       //The method splice cut the from the index the amount of items that we wanted
}
console.log(films)

//------Method pop 
categories.pop()            //delete the las value in of the array

//console.log(categories)
*/


//Change array to string

let newFils = films.join()
console.log(newFils)

//Change string to array

let chain = 'Sergio, Thomas, Salome'

let newChain = chain.split(' ')

console.log(newChain)



