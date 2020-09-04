'use strict'

window.addEventListener('load', () => {

    //Timers
    function interval(){
        //setInterval execute many times
        let timeInterval = setInterval(function(){          // execute many times
            console.log('Set Interval executed')
            let h1 = document.querySelector('h1')
            if(h1.style.fontSize == '50px'){
                h1.style.fontSize = '20px'
            }else{
                h1.style.fontSize = '50px' 
            }
            
        }, 3000)
        return timeInterval
    }
    
    let timerInter = interval()

    //setTimeout execute once
    let timeTimeOut = setTimeout(function(){            //execute once
        console.log('Set tiemout executed')
        let h1 = document.querySelector('h1')
        h1.style.color = 'orange'
        
    }, 3000)

    //Stop the set interval bucle

    let buttonStopInterval = document.querySelector('#stopBotton')
    buttonStopInterval.addEventListener('click', function(){
        alert('You stop the set interval bucle');
        clearInterval(timerInter);
    })

    let buttonStartInterval = document.querySelector('#startBotton')
    buttonStartInterval.addEventListener('click', function(){
        alert('You start the set interval bucle');
        interval()
    })
})