'use strict'

//FETCH (ajax)
//It is a method to do requests to services / api rest / backend

let usersPage = []

let divUsers = document.querySelector('#divUsers')

fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users => {
        usersPage = users.data
        console.log(usersPage)

        usersPage.map((user, i) =>{

            let name = document.createElement('h3')

            name.innerHTML = ` ${i}. ${user.first_name} ${user.last_name}`
            divUsers.appendChild(name)
            document.getElementById('pLoading').style.display = 'none'
        })
        
    })