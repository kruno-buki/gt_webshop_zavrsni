// const { default: gsap } = require("gsap/all");
//! FUNKCIJE KOJE POZIVAM
function navigacijaAnimacija() {
    let tl = gsap.timeline({
        default: {
            stagger: .9
        }
    })
    tl.from('nav ul li', {
        duration: .5,
        ease: "slow",
        opacity: 0.1,
        // y:-15

    })
    return tl
}

function ucitavanjeKartica() {
    let tl = gsap.timeline();
    let element=document.querySelector('.product-s')
    if(element!=null){
        tl.from('.product-s', {

        y: -50,
        duration: 0.3,
        ease: "slow",
        opacity: 0.1,
    })
    return tl
    }
    return
    
}

function ucitavanjeFiltera() {
    let tl = gsap.timeline();
    let element=document.querySelector('.filter');

    if(element!=null){
        tl.from(['.slidecontainer .slider', '.slidecontainer p', '#btnContainer .btn', '.processor', '.grafička', '.ekran', '.memorija', '.disk'], {
                y: 100,
                duration: 0.2,
                ease: "slow",
                opacity: 0,
                stagger: {
                    each: 0.1,
                    from: 'start'
                },
            
            })
            return tl 
    }
    else
     return
    
}
// ! UČITAVANJE KOŠARICE

function ucitavanjeKosarice() {
    let tl = gsap.timeline({
        defaults: {
           duration:.6,
            ease: "slow(0.7, 0.7, false)",
        }
    });

    let element=document.querySelector('thead th')
    if(element!=null){
    tl.from('thead th', {
            opacity: 0,
            duration: .3,
            stagger: {
                each: 0.05,
                from: 'center'
            },
        })
        .from('table tbody', {
            opacity: 0,
            duration: .3,
            stagger: {
                each: 0.1,
                from: 'start'
            },


        }, '-=0.2')
        .from('table tbody tr', {
            opacity: 0,
            duration: .3,
            stagger: {
                each: 0.1,
                from: 'end',
                ease:'slow'
            },
           
        }, '-=0.2')
        .from('table tbody tr td', {
            opacity: 0,
            duration: .2,
            ease: "slow", 
            
        }, '-=0.1')
    }

}

// ! UČITAVANJE PODKATEGORIJA

function ucitavanjePodkategorija() {
    let tl = gsap.timeline();
    let element=document.querySelector('.tematska-sekcija')
    if(element!=null){
        tl.from('.tematska-sekcija', {

        y: -100,
        duration: 0.3,
        ease: "slow",
        opacity: 0,
    })
    return tl
    }
    return

}


const master = gsap.timeline()
    .add(navigacijaAnimacija())
    .add(ucitavanjeKartica(), '-=.4')
    .add(ucitavanjeFiltera())
    .add(ucitavanjeKosarice())
    .add(ucitavanjePodkategorija())





//! MOUSE OVER products
let kartica = document.querySelectorAll("section.proizvodi-grid > div> div:nth-child(1)")
if(kartica!=null){
    gsap.utils.toArray(kartica).forEach(e => {

    let hover = gsap.to(e, {
        scale: 1.05,
        duration: 0.3,
        paused: true,
        ease: "slow",
    });

    e.addEventListener("mouseenter", () => hover.play());
    e.addEventListener("mouseleave", () => hover.reverse());
});
}

//! MOUSE preko buttons-a: " brandovi"

let buttonBrand = document.querySelectorAll(".btn")

if(buttonBrand!=null) {
   gsap.utils.toArray(buttonBrand).forEach(e => {

    let hover = gsap.to(e, {               
        scale: 1.15,        
        duration: .5,
        paused: true,
        ease: "slow",
        opacity:1,   
        fontWeight:"900", 
       
    })

    e.addEventListener("mouseenter", () => hover.play());
    e.addEventListener("mouseleave", () => hover.reverse());
}); 
}

//! MOUSE preko buttons-a: "u košaru"

let buttonUKosaru = document.querySelectorAll(".uKosaru")

if(buttonUKosaru!=null) {
   gsap.utils.toArray(buttonUKosaru).forEach(e => {

    let hover = gsap.to(e, {               
        scale: 1.1,        
        duration: .5,
        paused: true,
        ease: "slow",
        opacity:1,        
        backgroundColor:'#61892F',
        border: '3px solid #61892F'
    })

    e.addEventListener("mouseenter", () => hover.play());
    e.addEventListener("mouseleave", () => hover.reverse());
}); 
}


//! HOVER NAD KOSARICOM
let buttonBasket = document.querySelector("#basket")
if(buttonBasket!=null){
    let hoverBasket = gsap.to(buttonBasket, {
    scale: 1.3,
    duration: .25,
    paused: true,
    ease: "slow",
    y:2,
});
buttonBasket.addEventListener("mouseenter", () => hoverBasket.play());
buttonBasket.addEventListener("mouseleave", () => hoverBasket.reverse());
}


//! HOVER NAD logo
let buttonLogo = document.querySelector(".logo")

let hoverLogo = gsap.to(buttonLogo, {
    scale: 1.3,
    duration: .25,
    paused: true,
    ease: "slow",
    y:2,
});
buttonLogo.addEventListener("mouseenter", () => hoverLogo.play());
buttonLogo.addEventListener("mouseleave", () => hoverLogo.reverse());

//! HOVER NAD menu-iem
let menuLink = document.querySelectorAll("body > nav > ul > li>a")

gsap.utils.toArray(menuLink).forEach(e => {

    let hoverMenu = gsap.to(e, {
        
        duration: .2,
        paused: true,
        ease: "slow",
        padding:'0 1rem',
        color:'#86C232',
        fontWeight:'bold', 
        
    })
    e.addEventListener("mouseenter", () => hoverMenu.play());
    e.addEventListener("mouseleave", () => hoverMenu.reverse());
})
//! HOVER NAD dugme kosarica
let checkOutDugme = document.querySelectorAll(".idi-dalje")
if(checkOutDugme!=null){
   gsap.utils.toArray(checkOutDugme).forEach(e => {

    let hoverDugme= gsap.to(e, {
        scale:1.1,
        duration: .2,
        paused: true,
        ease: "slow",
        border: '3px solid #86C232',
        fontWeight:'bold', 
        
    })
    e.addEventListener("mouseenter", () => hoverDugme.play());
    e.addEventListener("mouseleave", () => hoverDugme.reverse());
}) 
}


