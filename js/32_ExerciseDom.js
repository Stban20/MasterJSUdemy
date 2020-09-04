'use strict'

window.addEventListener('load', () => {
    console.log('DOM is ready')

    let formForm = document.querySelector('#formForm')
    let divShowBox = document.getElementById('divShowBox')
    divShowBox.style.display = 'none'

    let name = ''
    let surname = ''
    let age = 0

    function checkDataUser(){
        if(name.trim() == null || name.trim().length == 0){
            alert('The name is not valid')
            return false
        }
        
        if(surname.trim() == null || surname.trim().length == 0){
            alert('The surname is not valid')
            return false
        }

        if(age == null || age <= 0 || isNaN(age)){
            alert('The age is not valid')
            return false
        }
    }

    formForm.addEventListener('submit', function(){
        console.log('Submit Event catched')

        name = document.querySelector('#inputName').value
        surname = document.querySelector('#inputSurname').value
        age = parseInt(document.querySelector('#inputAge').value)
        console.log(name,surname,age)
        checkDataUser()
   })

    let buttonShowInfo = document.getElementById('buttonShowInfo')
       buttonShowInfo.addEventListener('click', function(){
        
        let spanName = document.getElementById('spanName')
        let spanSurname = document.getElementById('spanSurname')
        let spanAge = document.getElementById('spanAge')
                   
        spanName.innerHTML = name
        spanSurname.innerHTML = surname
        spanAge.innerHTML = age
        
        if(checkDataUser() == false){
            divShowBox.style.display = 'none'
        }else{
            divShowBox.style.display = 'block'
        }
         })  
})