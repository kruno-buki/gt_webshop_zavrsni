// ! FILTRIRANJE PO BRANDOVIMA

var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn"); //HTML kolekcija

Array.from(btns).forEach(e => {

    e.addEventListener('click', () => {

        let trenutno = document.querySelector('.active');
        trenutno.className = highlightButton_off(trenutno.className);
        e.className += highlightButton_on(e);
    })
})
// -------------------------
// ? ZA HIGHLIGHT buttons
function highlightButton_on(e) {
    return ' active';
}

function highlightButton_off(trenutno) {
    return trenutno.replace(' active', '');
}
// -------------------------

btns[0].addEventListener('click', () => {
    prikaziSve();
})
btns[1].addEventListener('click', () => {
    prikazi('playstation');
})
btns[2].addEventListener('click', () => {
    prikazi('nitendo');
})
btns[3].addEventListener('click', () => {
    prikazi('xbox');
})

// -------------------------
const container = document.querySelector('.sekcija-proizvoda');
const divElementi = container.getElementsByClassName('product-ns');

//? FUNKCIJE

function prikazi(dugme) {
    Array.from(divElementi).forEach(e => {

        if (!e.className.match(' ' + dugme)) {
            e.className = e.className.replace(' product-s', ' product-ns');
        }

        if (e.className.match(' ' + dugme) && e.className.match(' product-ns')) {
            e.className = e.className.replace(' product-ns', ' product-s');
        }
    })
}
//? prikaz svih
function prikaziSve() {
    Array.from(divElementi).forEach(e => {
        if (e.className.match(' product-ns')) {
            e.className = e.className.replace(' product-ns', '');
        }
        e.classList.add('product-s');
    })
}
prikaziSve();
// ?-----------------------------------------
// !FILTRIRANJE - range
var slider = document.getElementById("myRange_laptops");
var output = document.getElementById("range-cijena");

output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)

const cijenaProizvoda = container.getElementsByClassName('cijena-proizvoda');

Array.from(divElementi).forEach(a=>{
    console.log(a.Array.from(cijenaProizvoda)).value
});

slider.oninput = function () {
    output.innerHTML = this.value;
    
    /*
     if (!e.className.match(' ' + dugme)) {
            e.className = e.className.replace(' product-s', ' product-ns');
        }

        if (e.className.match(' ' + dugme) && e.className.match(' product-ns')) {
            e.className = e.className.replace(' product-ns', ' product-s');
        }

    */
}



// ?-----------------------------------------