'use strict'

//Arrays
// Yo can have many values in a variable and there are save in a group of values

let names = ['Sergio Acosta', 'Nicolas Bernal', 'Mauricio Duenas', 31, true]    //the array have itens, the items start in 0

let languages = new Array('PHP','JS','Go','Java','C#');          //the first item have the position 0, the second item the position 1



console.log(names[0])               //to show just one item from the array, in this case the positio 0
console.log(languages)              // to show all the array

/*
let element = parseInt(prompt('Which element do you want?', 0))
if(element > names.length){         //use the length from the array
    alert(`The element ${element} does not exit`)
}else{
    alert(`The element ${element} is: ${names[element]}`)
}
*/

//Avanced array
//Go through an array with .length
/*
document.write('<h2>Programming Language</h2>')
document.write('<ul>')                              //To show everything in a 
for(let i = 0; i < languages.length; i++){         //go through the array to read all the items
    document.write('<li>'+languages[i]+'</li>')
    //debugger
}
document.write('</ul>')

//--------ForEach another method to go through of the arrays

 languages.forEach((element, index, data)=>{    //With the method forEach we can go through in the array, the first parameter go through the array, the second shows the index
    document.write('<li>'+index+' - '+element+'</li>')   
 })
*/
 //--------For in another method to go through of the arrays

 document.write('<ul>') 
 for(let element in languages){
     document.write('<li>'+languages[element]+'</li>')
 }

 document.write('</ul>')

 //Searching

 let search = languages.find(language => language == 'JS')      //Extract the text of the item if it is found
 let search1 = languages.findIndex(language => language == 'JS') //Extract the index of the item if it is found

 console.log(search, search1)
 

 let prices = [20, 30, 40, 50]
 let search2 = prices.some(price => price >= 20) //Search if the array has a special condition

 console.log(search2)


