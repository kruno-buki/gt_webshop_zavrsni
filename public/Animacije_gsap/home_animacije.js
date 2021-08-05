// ! HEADER
let headerAnimiranje = gsap.timeline()
headerAnimiranje.from('#home_header_tekst', {
        y: -100,

        scale: 0.3,
        opacity: 0,
        duration: 5,
        ease: "elastic.out(1,0.3)",
        transformOrigin: '50% 50%'

    })

    .to('#home_header_igraci', {
        delay: 1,
        repeat: -1,
        duration: 5,
        y: 5,
        scale: 1.01,
        yoyo: true,
        ease: 'slow'
    }, '-=4')
    .to('#home_header_ruke', {
        repeat: -1,
        duration: 5,
        y: -10,
        x: -5,
        scale: 1.01,
        yoyo: true,
        ease: 'slow( 0.7, 0.7, false)'
    }, '<')



//! ANIMACIJA podkategorije
let gamingLikovi = document.querySelector("#gaming_pod_igraci")
let hoverGamingLikovi = gsap.to(gamingLikovi, {
    scale: 1.1,
    duration: .7,
    paused: true,
    ease: 'slow( 0.7, 0.7, false)',
    transformOrigin: '50% 50%',
});
gamingLikovi.addEventListener("mouseenter", () => hoverGamingLikovi.play());
gamingLikovi.addEventListener("mouseleave", () => hoverGamingLikovi.reverse());


//! ANIMACIJA podkategorije
let businessLikovi = document.querySelector("#business_pod_igraci")
// let businessLikZuti= document.querySelector("#business_pod_zuti")

let hoverBusinessLikovi = gsap.to(businessLikovi, {
    immediateRender: false,
    scale: 1.1,
    duration: .7,
    paused: true,
    ease: 'slow( 0.7, 0.7, false)',
    transformOrigin: '50% 50%',
});

businessLikovi.addEventListener("mouseenter", () => hoverBusinessLikovi.play());
businessLikovi.addEventListener("mouseleave", () => hoverBusinessLikovi.reverse());


// ! SCROLL TRIGGER
let animPodkategorije = gsap.from(".podkategorije-kontenjer", {
    y: 200,
    duration: 1,
    opacity: 0,
    ease: 'slow( 0.7, 0.7, false)',


})
ScrollTrigger.create({
    trigger: ".podkategorije-kontenjer",
    animation: animPodkategorije,
    // markers:true,
    start: "top +=800px",
    end: "top +=300px",
})



// ! ANIMACIJA slideshow-a
//? unutar home.carousel.js


// ! ANIMIRANJE  AKCIJE

let animAkcije = gsap.timeline()

animAkcije.from('.promo-akcija', {
        y: 300,
        duration: 1,
        opacity: 0,

    })
    .from('#naslov_akcije', {
        duration: 2,
        transformOrigin: "50% 50%",
        opacity: 0,
        y: -50,
        scale: 0,
        ease: "bounce.out"

    })
    .from('#akcija_dodaci', {
        duration: 2,
        opacity: 0,
        ease: " slow( 0.3, 0.7, false)"

    }, '-=2')



ScrollTrigger.create({
    trigger: "#akcijska_reklama",
    animation: animAkcije,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top center+=300px",
    end: "top center",
    // toggleClass: "active",
    // pin: true,

});

// !hover akcije

let akcijaReklama = document.querySelector("#akcija_animiranje")

let hoverAkcija = gsap.to(['#akcija_crveni', '#akcija_zuti'], {
    scale: 1.05,
    duration: 3,
    paused: true,

    ease: 'slow( 0.7, 0.7, false)',
    transformOrigin: '50% 50%',
    repeat: -1,
    yoyo: true,


});

akcijaReklama.addEventListener("mouseenter", () => hoverAkcija.play());
akcijaReklama.addEventListener("mouseleave", () => hoverAkcija.reverse());


// ! ANIMIRANJE  'Imamo posao za tebe''

let animPosao = gsap.timeline()

animPosao.from('.promo-posao', {
        y: 300,
        duration: .5,
        opacity: 0,

    })
    .from('#onama_animiranje', {
        duration: 1,
        transformOrigin: "50% 50%",
        opacity: 0,
        y: -50,
        scale: 0,
        ease: "bounce.out"

    })
    .to('#onama_animiranje', {
        duration: 1.5,
        transformOrigin: "50% 50%",
        repeat:-1,
        yoyo:true,
        y: 10,
        scale: 1.05,
        ease: 'slow( 0.7, 0.7, false)',

    })
    
    
    .from('.vidi_vise_posao', {
        scale: 1.1,
        duration: 1,
        y: 150,
        opacity: 0,
        ease: 'slow( 0.7, 0.7, false)',
        transformOrigin: '50% 50%',

    },'<')



ScrollTrigger.create({
    trigger: "#onama_animiranje",
    animation: animPosao,

    start: "top center+=300px",
    end: "top center",

});
