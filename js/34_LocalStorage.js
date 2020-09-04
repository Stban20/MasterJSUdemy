'use strict'

window.addEventListener('load', () => {
    console.log('DOM is ready')

//Local Storge
//Save information in the web browser and could be use later in the application 

//Check availability from the Local Storage

    if(typeof(Storage) !== 'undefined'){
        console.log('LocalStorage avalaible')
    }else{
        console.log('LocalStorage is not avalaible')
    }

//Save data in the Local Storage

localStorage.setItem('Title', 'Course JS Udemy')

//Recover save element in LocalStorage

localStorage.getItem('Title')
console.log(localStorage.getItem('Title'))
document.querySelector('#pFilms').innerHTML = localStorage.getItem('Title')

//Save objects in the local storage

let user = {
    name: 'Sergio',
    surname: 'Acosta',
    age: 31
}

localStorage.setItem('user', JSON.stringify(user))

//Recover objects from the LocalStorage

let recoverUser = JSON.parse(localStorage.getItem('user'))
console.log(recoverUser)
document.querySelector('#pFilms').append(` ${recoverUser.name}`)

localStorage.removeItem('user')
localStorage.clear()

localStorage.set
})