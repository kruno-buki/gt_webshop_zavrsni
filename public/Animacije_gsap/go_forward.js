//! Hover nad podkategorijom
//? kod prijelaza  potrebno je prikazati strelice

// const { default: gsap } = require("gsap/all")

let goForward = document.querySelectorAll(".vidi_vise")

gsap.utils.toArray(goForward).forEach(e => {


    let hover = gsap.to(e, {
        
        scale: 1.3,
        
        duration: .5,
        paused: true,
        ease: "slow",
        backgroundColor:'hsl(85, 59%, 48%)',
        repeat:-1,
        yoyo:true
        

    })


    e.addEventListener("mouseenter", () => hover.play());
    e.addEventListener("mouseleave", () => hover.reverse());

})





