
// ! HAMBI program:
const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelector(".navbar-hamb");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change")

  //! HAMBI ANIMACIJA
  let slideLista = document.querySelectorAll(".nav-list")

  gsap.fromTo(slideLista, {
    opacity: 0,
    x:100,
    scale:1.1,
 
  }, {
    opacity: 1,
    ease:'slow',
    duration: .5,
    scale:1,
    x:0,
   


  })
});



//! Animiranje navigacije
//* dodavanje klase za izmjenu fonta nakon 500px scroll y(dolje 

document.addEventListener('scroll', () => {
  // console.log(window.pageYOffset);
  let nav = document.querySelector('nav')
  let preH = document.querySelector('.pre-header')



  if (window.pageYOffset > 500) {
    nav.setAttribute('class', 'y-scroll')
    preH.classList.add('y-scroll')

  } else {
    nav.removeAttribute('class', 'y-scroll')
    preH.classList.remove('class', 'y-scroll')
  }
})


//! Animiranje STRELICeza povratak na vrh
//* kada scroll dolje... micanje navigacije...scroll gore...pojavljivanje
var posStartScroll = window.pageYOffset;
document.addEventListener('scroll', () => {
  // console.log(window.pageYOffset);

  let navShow = document.querySelector('#nav-main');

  let posTrenutniScroll = window.pageYOffset

  if (posStartScroll > posTrenutniScroll) {
    navShow.style.top = "0";
    gsap.to(navShow, {
      top: '0',
      duration: .5,
      ease: "power4.out"

    })
  } else {
    gsap.to(navShow, {
      duration: .5,
      top: '-5rem',


    })

  }
  posStartScroll = posTrenutniScroll
})