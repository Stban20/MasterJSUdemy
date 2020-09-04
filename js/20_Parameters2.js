'use strict'

//Parameters REST and SPREAD

function fruitList(fruit1, fruit2, ...restofFruits){  //REST to capture the aditional values
    console.log('Fruit 1: '+fruit1)
    console.log('Fruit 2: '+fruit2)
    console.log(restofFruits)
}

let fruits = ['Orange','Apple']

fruitList(...fruits,'Sandia','Banana','Coco')   //SPREAD to asign the values from the array