'use strict'

//LocalStorage Exercise

let formFilms = document.querySelector('#formFilms')

formFilms.addEventListener('submit', function(){
    let titleFilm = document.querySelector('#addFilm').value
    if(titleFilm.length >= 1){
        localStorage.setItem(titleFilm, titleFilm)
    }

})
let ulFilms = document.querySelector('#ulFilms')

for(let element in localStorage){
    if(typeof localStorage[element] == 'string'){
        let filmLS = localStorage[element]
        let liFilms = document.createElement('li')
        liFilms.append(filmLS)
        ulFilms.append(liFilms)
    }    
}

let formEraseFilms = document.querySelector('#formEraseFilms')

formEraseFilms.addEventListener('submit', function(){
    let titleFilm = document.querySelector('#eraseFilm').value
    if(titleFilm.length >= 1){
        localStorage.removeItem(titleFilm)
    }

})