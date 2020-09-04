'use strict'

//Events
//Function that execute when the user do something in the page
//could be resize of the window, movements of the mouse and others

// load event

window.addEventListener('load', () => {

    //Mouse Events
    //could be clic, pass over an element

    function changeColor(){
        console.log('Clic')
        let bgButton1 = botton1.style.backgroundColor

        if(bgButton1 == 'white'){
            botton1.style.backgroundColor = 'green'
            botton1.style.border = '5px solid white'
        }else{
            botton1.style.backgroundColor = 'white'
            botton1.style.border = '5px solid green'
        }
        return true
    }

    //Click event
    var botton1 = document.getElementById('botton1')


    botton1.addEventListener('click', function(){
        changeColor()
    })

    this.style.backgroundColor = 'white'
    this.style.border = '5px solid green'

    //Mouse over
    botton1.addEventListener('mouseover', function(){
        botton1.style.backgroundColor = 'yellow'
    })

    //Mouse over
    botton1.addEventListener('mouseout', function(){
        botton1.style.backgroundColor = '#ccc'
    })

    //Keyboard Events and focus

    let inputName = document.getElementById('inputdName')

    //focus
    inputName.addEventListener('focus', function(){
        console.log('[focus] Inside the input')
    })

    //blur
    inputName.addEventListener('blur', function(){
        console.log('[blur] Outside the input')
    })

    //keydown
    inputName.addEventListener('keydown', function(event){
        console.log('[keydown] Pressing a key', String.fromCharCode(event.keyCode))
    })

    //keypress
    inputName.addEventListener('keypress', function(){
        console.log('[keypress] Presses a key', String.fromCharCode(event.keyCode))
    })

    //keyup
    inputName.addEventListener('keyup', function(){
        console.log('[keyup] Realeses a key', String.fromCharCode(event.keyCode))
    })


}) // load end


