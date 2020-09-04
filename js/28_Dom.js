'use strict'

// DOM - Document Object Model
//DOM is all the elements inside the page: body, header, h1, p, div, etc

//-------Select html element by id
let number = 30
//let box1 = document.getElementById('box1')        //method getElementById select the element from the htlm by its id
let box1 = document.querySelector('#box1')          //method querySelector select the element from the htlm, inside the value use # for id, . for class

box1.innerHTML = `<p>This first box is modified from JS         
                and coul have variable inside ${number}</p>` //method innerHTML is useful to insert new data en el html element
box1.style.background = 'red'
box1.style.padding = '20px'
box1.style.color = 'white'
box1.className = 'box1'

//console.log(box1)

//-------Select elements by TagName
let elementsDiv = document.getElementsByTagName('div')      //method getElementByTagName to select all the element with this tag name
console.log(elementsDiv)                                    //the result is inserted in an array of HTML cllection
console.log(elementsDiv[1])                                 //return the html ellement in the idex 1
console.log(elementsDiv[1].textContent)                     //methos .textContent to extract the content

let oneElementsDiv = elementsDiv[2]
oneElementsDiv.innerHTML = 'Third box is modified by JS'
oneElementsDiv.style.background = 'blue'
oneElementsDiv.style.color = 'white'

//-------Insert the arrays of Div's in a new section in a paragraph
let hr = document.createElement('hr')
let firstSection = document.querySelector('#firstSection')
for(let element in elementsDiv){
    if(typeof elementsDiv[element].textContent == 'string'){
        let paragraph = document.createElement('p')
        let divText = document.createTextNode(elementsDiv[element].textContent)
        paragraph.append(divText)
        firstSection.append(paragraph)       //append insert after 
    }
}
firstSection.append(hr)

//-------Select elements by Class Name

let yellowDiv = document.getElementsByClassName('Yellow')
let redDiv = document.getElementsByClassName('Red')
console.log(yellowDiv)
redDiv[0].style.background = 'red'
console.log(redDiv)
for(let element in yellowDiv){
    if(yellowDiv[element].className == 'Yellow'){
        yellowDiv[element].style.background = 'Yellow'
        yellowDiv[element].style.color = 'blue'
    }
} 


//Query Selector

let manyDiv = document.querySelectorAll('div')

console.log(manyDiv)