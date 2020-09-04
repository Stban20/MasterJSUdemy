'use Strict'

/*To do a program that
1. ask for 6 numbers and inset then in an array
2. To show the array in console and the page
3. Organice the array and show it
4. Turn around the array and show it
5. To show how many elements has the array
6. Search for a value insert by the user and to give if it belongs and show their index
*/


var numbers = []
let times = 0
do{
    number = parseInt(prompt('Please insert a number for the array'),0)       //We can insert the prompt in the .push() method
    numbers.push(number)
    times++
}while(times < 6)
function printArray(text = ''){
    document.write(`<h2>The next is the array ${text}</h2>`)
    document.write('<ul>')
        for(let element in numbers){
            document.write(`<li>${numbers[element]}</li>`)
        }
    document.write('</ul>')
}

//Show the original array
console.log(numbers)
printArray('original')

//Show the array organized
numbers.sort((a, b) => a-b)
printArray('organice')

//Show the array turn arround
numbers.reverse()
printArray('turned around')

//Show the amount of elements in the array
console.log(numbers.length)
document.write(`<h2>The array has ${numbers.length} elements</h2>`)

//Ask for a new number and search if it belongs to hte array

let searchNumber = parseInt(prompt('Please insert the search number'))
let search1 = numbers.find(item => item == searchNumber)
let search2 = numbers.findIndex(item => item == searchNumber)
if(search1 == searchNumber){
    document.write(`<p>The number <strong>${searchNumber}</strong> belongs to the array in the position <strong>${search2}</strong></p>`)
}else{
    document.write(`<p>The number <strong>${searchNumber}</strong> does not belong to the array</p>`)
}
console.log(search1)







