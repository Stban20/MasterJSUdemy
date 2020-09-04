'use strict'

// Practicing variables, coments and console

const article = 'Bici' //The const never change their value
var brandBici = 'Orbea' // The variables decalred with var can be changed inside of bloks
let groupBici = 'Shimano Deore' // The variables decalred with let limit their scope to the bloks

if(true){
    var brandBici = 'Canyon'
    let groupBici = 'Shimano SLX'
    console.log(brandBici, groupBici)
}

console.log(brandBici, groupBici)
