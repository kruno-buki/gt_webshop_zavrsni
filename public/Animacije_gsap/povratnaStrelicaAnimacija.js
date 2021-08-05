

//! strelica-povratna
let strelica = document.querySelector('#povratna-strelica')

document.addEventListener('scroll', () => {

    if (window.pageYOffset < 700) {
        strelica.hidden = true

        strelicaAnimacija.reverse()
        
    } else {

        strelica.hidden = false
        strelicaAnimacija.play()
    }



})

const strelicaAnimacija = gsap.timeline()

strelicaAnimacija.from(['#povratna-strelica','#g-strelica','#d-strelica','#kruzic','#prstenovi'], {
        
        stagger:{
            from:'start',
            each:.2,
            y: -100 
        },
        opacity: 0
    })

//! povratak na VRH

strelica.addEventListener('click', () => {
    gsap.to(window, {
        duration: 1.2,
        scrollTo: 0
    });

    // window.scrollTo(pageXOffset, 0)
})

// ! animiranje