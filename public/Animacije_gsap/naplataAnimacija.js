//! učitavanja
// !korak 1
// const { default: gsap } = require("gsap/all");
let uvod = document.querySelector('.sekcija-naplata>div:nth-child(2)')
if (uvod != null) {
        gsap.from(uvod, {
                duration: 1,
                opacity: 0,
                y: 100,
                ease: 'slow'
        })

}

// !korak 2
let form = document.querySelector('.sekcija-naplata>div:nth-child(3)')
if (form != null) {
        gsap.from(form, {
                duration: 1,
                opacity: 0,
                y: 100,
                ease: 'slow',
                stagger: {
                        each: 0.1,
                        from: 'start'
                }
        })
}

// !korak 3 KLIK na radio button

let radioButton = document.querySelectorAll(".sekcija-naplata > div.izbor-placanja > div.form-placanje > form > .form-div-dio>div> input")
if(radioButton!=null){
     gsap.utils.toArray(radioButton).forEach(e => {

        // let klik = gsap.to(e, {

        //         ease: "slow",
        //         duration:2,

        // })

        e.addEventListener("click", () => {
                // klik.play();

                let activeKlasa = document.querySelector('.active-odabir')
                if (activeKlasa != null) {

                        // let aktivacijaKlase = 
                        gsap.from(activeKlasa, {
                                duration: 1,
                                opacity: '0.3',
                                borderColor: 'green',
                                border: '10px solid',
                                // padding:0,
                                borderColor: 'green',
                                ease: "slow",

                                // immediateRender:false,
                        })
                        gsap.from('.active-odabir div', {
                                duration: 1,

                                opacity: '0',
                                ease: "slow",
                                stagger: {
                                        each: 0.4,
                                        from: 'start'
                                },
                                scale: 1.5,
                                y: 10
                        })
                }


        })

});   
}

// !korak 4

//! HOVER NAD sljedeći korak

let checkSljedeceDugme = document.querySelector(".idi-dalje")
if(checkSljedeceDugme!=null){
     let hoverSljedeciKorak = gsap.to(checkSljedeceDugme, {
        scale: 1.1,
        duration: .2,
        paused: true,
        ease: "slow",
        border: '3px solid   #86C232',
});

checkSljedeceDugme.addEventListener("mouseenter", () => hoverSljedeciKorak.play());
checkSljedeceDugme.addEventListener("mouseleave", () => hoverSljedeciKorak.reverse());   
}


//! HOVER NAD prethodni korak ...za 1 dugme
let checkPrethodnoDugme = document.querySelector(".vrati-se")
if (checkPrethodnoDugme != null) {
        let hoverPrethodniKorak = gsap.to(checkPrethodnoDugme, {
                scale: 1.1,
                duration: .2,
                paused: true,
                ease: "slow",
                border: '3px solid  green',
        });

        checkPrethodnoDugme.addEventListener("mouseenter", () => hoverPrethodniKorak.play());
        checkPrethodnoDugme.addEventListener("mouseleave", () => hoverPrethodniKorak.reverse());
}


// ---KC
// let vvv= gsap.to(e, {
//     scale:1.1,
//     duration: .2,
//     paused: true,
//     ease: "slow",
//     border: '3px solid #86C232',
//     fontWeight:'bold', 

// })
// checkPrethodnoDugme.addEventListener("mouseenter", () => {
//     hoverPrethodniKorak.play()
//     vvv.play()
// });
// checkPrethodnoDugme.addEventListener("mouseleave", () => {
//     hoverPrethodniKorak.reverse()
//     vvv.reverse()
// });

//! naglašavanje koraka NAD dugme kosarica
let aktivniKorak=document.querySelector('.aktivni-korak')
if(aktivniKorak!=null){
      gsap.from(".aktivni-korak", {
        duration: 2,
        repeat: -1,
        // yoyo:true,
        ease: "slow(0.7, 0.7, false)",
        opacity: 0.2,
        border: '5px solid #222629',
        boxShadow: '2px 2px 10px 2px #DAFFE5',
        scale:1.2
        
})  
}
