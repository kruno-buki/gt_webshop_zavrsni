

let tl = gsap.timeline();
let element=document.querySelector('.sekcija_informacije')

    tl.from('.sekcija_informacije', {

    y: -100,
    duration: 1,
    ease: "slow",
    opacity: 0,
})