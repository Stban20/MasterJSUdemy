'use strict'

//Text templates
// You can use it to save writing code and insert variables with ${}

let name = prompt('Insert you Name: ')
let surname = prompt('Insert you Surname: ')

let completeName = `
    <p>Hello dear user <br/>
    My name is: ${name} <br/>
    My surname is: ${surname}</p>
`

document.write(completeName)