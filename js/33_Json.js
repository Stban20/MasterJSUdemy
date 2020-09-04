'use strict'

window.addEventListener('load', () => {
    console.log('DOM is ready')

//JSON - Java Object Notation

    let film = {
        title: 'Batman',
        year: 2017,
        country: 'USA'
    }

    let films = [
        {title: 'Aquaman', year: 2018, country: 'USA'},
        film
    ]
    console.log(film)
    console.log(film.title)

    let boxFilms = document.querySelector('#boxFilms')
    for(let element in films){
        let paragrph = document.createElement('p')
        paragrph.append(` ${films[element].title} - ${films[element].year} `)
        boxFilms.append(paragrph)
    }

})