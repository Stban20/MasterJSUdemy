'use strict'

//BOM - Browser Object Model
//The elements from the web browser, size of the browser, url

function bom (){
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    console.log(screen.height)
    console.log(screen.width)
    console.log(window.location)
    console.log(window.location.href)
}
bom()

function redirect(url){
    window.location.href = url
    
}

//redirect('https://google.com')

function newWindow(url){
    window.open(url,'','width=200px')
}

newWindow('https://google.com')
