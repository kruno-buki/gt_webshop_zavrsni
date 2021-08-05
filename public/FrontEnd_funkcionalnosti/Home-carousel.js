// const { default: gsap } = require("gsap/all");

// const { default: gsap } = require("gsap/all");

// const {
//   default: gsap
// } = require("gsap/all");

// const { default: gsap } = require("gsap/all");

var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1)
  }, 3000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  slideshowContainer = document.getElementsByClassName('slideshow-kontenjer')[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowContainer = document.getElementsByClassName('slideshow-kontenjer')[0];

  slideshowContainer.addEventListener('mouseenter', pause)
  slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2)
    }, 4000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1)
    }, 4000);
  }

  // !ANIMIRANJE SLIDEshow-a kad se klika dugme next/previous 
  let ss = document.querySelectorAll(".slide")
  //! next
  document.querySelector('.next').addEventListener('click', () => {
    gsap.fromTo(ss, {
      opacity: 0,

    }, {
      opacity: 1,
      duration: 3,
    })
  })
  //! prev
  document.querySelector('.prev').addEventListener('click', () => {
    gsap.fromTo(ss, {
      opacity: 0,

    }, {
      opacity: 1,
      duration: 3,
    })
  })



}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1)
  }, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot-slider");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";


  // !ANIMIRANJE SLIDEshow-a

  // ! Animiranje slide-a
  let ss = document.querySelectorAll(".slide")
  gsap.utils.toArray(ss).forEach(e => {

    gsap.from(e, {
      immediateRender: false,
      duration: 1,
      opacity: 0,
      ease: "slow(0.5,0.4, false)",
      padding: '0 1rem',

    })
  })
  // ! Animiranje reklame kod hover-a-a
  let slideShowProizvod = document.querySelectorAll(".slideShowReklama")

  gsap.utils.toArray(slideShowProizvod).forEach(e => {

    let hoverslideShowProizvod = gsap.to(e, {
      immediateRender: false,
      duration: .5,
      paused: true,
      ease: "slow",
      scale: 1.1,
      transformOrigin: '50% 50%',

    })
    e.addEventListener("mouseenter", () => hoverslideShowProizvod.play());
    e.addEventListener("mouseleave", () => hoverslideShowProizvod.reverse());
  })

// ! Animiranje slide-a kod klika na dot (tockice)
  let slideDott = document.querySelectorAll(".dot-slider")
  gsap.utils.toArray(slideDott).forEach(e => {

    let clickDot = gsap.fromTo(ss, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 3,
    })

    e.addEventListener('click', () => clickDot())
  })

}

pause = () => {
  clearInterval(myTimer);
}

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex)
  }, 4000);
}