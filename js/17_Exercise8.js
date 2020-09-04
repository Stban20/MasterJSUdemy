'use strict'

//To show the multiplication table from the number inserted by the user
let result = 0
let number = parseInt(prompt('Insert the number', 1))

while( isNaN(number)  ){
    number = parseInt(prompt('Insert a valid number', 1))

}

document.write("<h2> The multiplication table from the number "+number+" is:</h2>")

for(var i = 1; i<= 10; i++){
    result = i * number
    document.write(i+' x '+number+' = '+result+'<br/>')
}


document.write("<h2> The multiplication tables until 10 are:</h2>")

for(let c = 1; c <= 10; c++){
    document.write('<h2>The multilication table of '+c+'</h2>')
    for(var i = 1; i<= 10; i++){
        document.write(i+' x '+c+' = '+(i*c)+'<br/>')
    }

}
document.write('<br/>')