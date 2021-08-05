const container = document.querySelector('.sekcija-proizvoda');
const chk = Array.from(document.querySelectorAll('.chk'));
let niz = [];

// ! -----------------------
// ! ---------- VARIJABLE: FILTRIRANJE BRANDOVA -------------
//za filtriranje brandova:
var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn"); //HTML kolekcij

const btnsBrand=document.querySelectorAll(".btn")

const divElementi = container.getElementsByClassName('product-ns');


// ! -----------------------
// ! ------------ VARIJABLE: range-bar -----------
// za PRIKAZ: range bar
var slider = document.getElementById("myRange");
var output = document.getElementById("range-cijena")
//niz svih cijena
const cijene = container.getElementsByClassName('cijena');
const cijenaProizvoda = Array.from(container.getElementsByClassName('cijena-proizvoda'));
// ! -----------------------
// ?GSAP

function ucitavanjeKartica() {
    let tl = gsap.timeline();
    tl.from('.product-s', {
        y: 50,
        duration: 0.3,
        ease: "slow",
        opacity: .1,
    })
    return tl
}



// ! FILTRIRANJE PO BRANDOVIMA
//? dugme BRANDOVA
Array.from(btnsBrand).forEach(e => {
    e.addEventListener('click', () => {
        let trenutno = document.querySelector('.active');
        trenutno.className = highlightButton_off(trenutno.className);
       
        e.className += highlightButton_on(e);
        
        //!GSAP
        ucitavanjeKartica();

    })
})
// ? ZA HIGHLIGHT buttons
function highlightButton_on(e) {
    return ' active'; //put class .active 
}

function highlightButton_off(trenutno) {
    return trenutno.replace(' active', ''); //brisanje highlight
}
// -------------------------
//? FUNKCIJE
//? prikaz svih

function prikaziSve() {
    Array.from(divElementi).forEach(e => {


        //* provjeravam je li element sadrži klasu .product-ns
        if (e.className.indexOf('product-ns') > -1) {

            e.className = e.className.replace('d2', '');

            //*dodajem klasu product-s kojom sve postaje vidljivo
            e.classList.add('product-s');

            //*dodajem klasu dummy koji će mi služiti kao flag 
            e.classList.add('d1');
            // * dodajme dummy3 radi filtra
            e.classList.add('d3');


        }
        //* provjeravam postojanje klase .r-ns-> ako postoji, obriši
        if ((e.className.indexOf('r-ns') > -1)) {
            e.className = e.className.replace(' r-ns', '');
        }
        resetirajBtns();
        resetRangeBar();

        brisanjeXKlase();
        brisanjeZKlase();


    })
}
prikaziSve();

function prikazi(dugme) {

    Array.from(divElementi).forEach(e => {
        // * obriši klasu .d3 ...nije potrebna više
        e.className = e.className.replace(' d3', '');

        if ((e.className.indexOf(dugme) > -1) && e.className.indexOf('d1') > -1) {
            e.className = e.className.replace('r-ns', 'product-s');
            e.className = e.className.replace('d1', 'd2');

        } else if (!(e.className.indexOf(dugme) > -1)) {
            e.className = e.className.replace('product-s', 'r-ns');
            e.className = e.className.replace('d2', 'd1');
        } else {
            e.className = e.className.replace('r-ns', 'product-s');
            //  e.className.replace('d2','');
        }

    })
    resetRangeBar();
    resetirajBtns();

    brisanjeZKlase();
    brisanjeXKlase();
}
// ?-----------------------------------------
// !FILTRIRANJE - range

output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
// ? preko .containera možeš jer je nodeList ali zato ne možeš (!) preko .divElementi jer je to HTML kolekcija




function filtriranjeRange(output) {

    Array.from(cijenaProizvoda).forEach(e => {
        let ciljaniElement = e.parentElement.parentElement.parentElement;
        let cijena = parseInt((e.textContent).replace(/\s+/g, '').trim());
        //? dugme - filteri
      

        //?ok!
        if (cijena <= parseInt(output.textContent)) {
            ciljaniElement.classList = ciljaniElement.className.replace('product-s', 'r-ns');

        }
        if (cijena >= parseInt(output.textContent) && ciljaniElement.className.indexOf('d3') > -1) {
            ciljaniElement.classList = ciljaniElement.className.replace('r-ns', 'product-s');

        }

        if (cijena >= parseInt(output.textContent) && ciljaniElement.className.indexOf('d2') > -1) {
            ciljaniElement.classList = ciljaniElement.className.replace('r-ns', 'product-s');

        }
        //EKSTRA - radi sa 1. gumbom
        if (cijena >= parseInt(output.textContent) && ciljaniElement.className.indexOf('d3') > -1 && ciljaniElement.className.indexOf('Z') > -1) {
            ciljaniElement.classList = ciljaniElement.className.replace('product-s', 'r-ns');

        }

        //EKSTRA - radi sa ostalim gumbima
        if (cijena >= parseInt(output.textContent) && ciljaniElement.className.indexOf('d2') > -1 && ciljaniElement.className.indexOf('X') > -1) {
            ciljaniElement.classList = ciljaniElement.className.replace('product-s', 'r-ns');

        }

    })


}
slider.oninput = function () {

    output.innerHTML = this.value;

    filtriranjeRange(output);

}

// ?------------------FUNKCIJE ZA OPCIJE: -----------------------
let inT = document.querySelectorAll(".provjera")

//? dugme - filteri

Array.from(inT).forEach(e => {
   
    e.addEventListener('click', () => { 
        let productSDuljina=document.querySelectorAll('.product-s')
        //!GSAP
        if(productSDuljina.length<1)     
            return
        ucitavanjeKartica();
    })
})

function filterZnacajki(spec) {

    spec.forEach(e => {
        let kontenjerProizvoda = e.parentNode.parentNode.parentNode;

        if (btns[0].className.indexOf('active') > -1) {

            kontenjerProizvoda.className = kontenjerProizvoda.className.replace(' product-s', ' r-ns');
            kontenjerProizvoda.className += ' Z';

        }
        if (!(btns[0].className.indexOf('active') > -1)) {
            if ((kontenjerProizvoda.className.indexOf('d2') > -1)) {
                kontenjerProizvoda.className = kontenjerProizvoda.className.replace('product-s', 'r-ns');
                kontenjerProizvoda.className += ' X';
            }
        }
    });
    resetRangeBar();
}

function filterZnacajkiAll(spec) {

    spec.forEach(e => {
        let kontenjerProizvoda = e.parentNode.parentNode.parentNode;
        if (btns[0].className.indexOf('active') > -1) {
            kontenjerProizvoda.className = kontenjerProizvoda.className.replace(' r-ns', ' product-s');
            kontenjerProizvoda.className = kontenjerProizvoda.className.replace(' Z', '');

        }
        if (kontenjerProizvoda.className.indexOf('d2') > -1) {
            kontenjerProizvoda.className = kontenjerProizvoda.className.replace(' r-ns', ' product-s');
            kontenjerProizvoda.className = kontenjerProizvoda.className.replace(' X', '');

        }

        //EKSTRA_ kad je 1.el selektiran
        if (kontenjerProizvoda.className.indexOf('Z') > -1 && kontenjerProizvoda.className.indexOf('d3') > -1) {
            kontenjerProizvoda.className = kontenjerProizvoda.className.replace(' product-s', ' r-ns');

        }

        //EKSTRA_kad su drugi elementi selektirani
        if (kontenjerProizvoda.className.indexOf('X') > -1 && kontenjerProizvoda.className.indexOf('d2') > -1) {
            kontenjerProizvoda.className = kontenjerProizvoda.className.replace(' product-s', ' r-ns');

        }

    });

    resetRangeBar();


}

function brisanjeXKlase() {
    let proizvodi = document.querySelectorAll('.proizvodi-grid');
    let nizProizvoda = Array.from(proizvodi[0].children);

    for (let e of nizProizvoda) {
        while (e.className.indexOf('X') > -1) {
            e.className = e.className.replace('X', ' ');
        }
    }

}

function brisanjeZKlase() {
    let proizvodi = document.querySelectorAll('.proizvodi-grid');
    let nizProizvoda = Array.from(proizvodi[0].children);

    for (let e of nizProizvoda) {
        while (e.className.indexOf('Z') > -1) {
            e.className = e.className.replace(' Z', '');
        }
    }

}

//! očisti označene btns
function resetirajBtns() {
    console.log(chk.length);
    for (let i = 0; i < chk.length; i++) {
        if (chk[i].checked == true) {
            chk[i].checked = false;
        }
    }
}

function resetRangeBar() {
    slider.value = 1000;
    output.textContent = 1000;

}