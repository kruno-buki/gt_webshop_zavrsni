// const { default: gsap } = require("gsap/all");



let goForward = document.querySelectorAll(".vidi_vise")

gsap.utils.toArray(goForward).forEach(e => {


    let hover = gsap.to(e, {

        scale: 1.1,
        duration: .5,
        paused: true,
        ease: "slow",
        backgroundColor: 'hsl(85, 59%, 48%)',
        repeat: -1,
        yoyo: true

    })

    e.addEventListener("mouseenter", () => hover.play());
    e.addEventListener("mouseleave", () => hover.reverse());

})



// ! SCROLLTRIGGER


let wrapOpis = document.querySelectorAll(".wrap-opis")


gsap.utils.toArray(wrapOpis).forEach((e) => {

    let gameBusinessSekcije = gsap.from(e, {
        y: 300,
        duration: 1,
        opacity: 0,
        ease: " slow( 0.7,  0.4, false)"
    })


    ScrollTrigger.create({
        trigger: e,
        animation: gameBusinessSekcije,

        start: "top center",
        end: "top center",


    });

});

let laptop = document.querySelectorAll(".link-na-proizvod")

gsap.utils.toArray(laptop).forEach((e) => {

    let gameBusinessSekcije = gsap.from(e, {
        y: 300,
        duration: 1,
        opacity: 0,
        ease: " slow( 0.7,  0.4, false)"

    })
    ScrollTrigger.create({
        trigger: e,
        animation: gameBusinessSekcije,
        markers:true,
        start: "top center",
        end: "top center",

        // pin: true,

    });

});