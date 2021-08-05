// ? VARIJABLE
//za filtriranje brandova:
var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn"); //HTML kolekcij

const container = document.querySelector('.sekcija-proizvoda');
const divElementi = container.getElementsByClassName('product-ns');

// za PRIKAZ: range bar
var slider = document.getElementById("myRange");
var output = document.getElementById("range-cijena");
//niz svih cijena
const cijene = container.getElementsByClassName('cijena');
const cijenaProizvoda = Array.from(container.getElementsByClassName('cijena-proizvoda'));
// ---------------------------------------------------------------------------
// ! FILTRIRANJE PO BRANDOVIMA

Array.from(btns).forEach(e => {
    e.addEventListener('click', () => {
        let trenutno = document.querySelector('.active');
        trenutno.className = highlightButton_off(trenutno.className);
        e.className += highlightButton_on(e);
         //resetiranje range-bar
        //  slider.value=1000;
        //  output.textContent=1000;
       
    })
})
// ? ZA HIGHLIGHT buttons
function highlightButton_on(e) {
    return ' active'; //put class .active 
}
function highlightButton_off(trenutno) {
    return trenutno.replace(' active', '');
}
// -------------------------

//? FUNKCIJE

function prikazi(dugme) {
    Array.from(divElementi).forEach(e => {
        
        if (!e.className.match(' ' + dugme)) {
            e.className = e.className.replace(' product-s', ' product-ns');
            // e.className = e.className.replace(' product-s', ' product-ns');
        }
        if (e.className.match(' ' + dugme) && e.className.match(' product-ns')) {
            e.className = e.className.replace(' product-ns', ' product-s');
        }

        // if (e.className.match(' ' + dugme) && e.className.match(' r-ns')) {
        //     e.className = e.className.replace(' r-ns', ' r-s');
        // }
        // if (e.className.match(' ' + dugme) && e.className.match(' r-s')) {
        //     e.className = e.className.replace(' r-s', ' r-ns');
        // }
      
        slider.value=1000;
        output.textContent=1000;
     
        
    })
}
//? prikaz svih
function prikaziSve() {
    Array.from(divElementi).forEach(e => {
        if (e.className.match(' product-ns')) {
            e.className.classList = e.className.replace(' product-ns', '');
        }
        if (e.className.match(' r-ns')) {
            e.className.classList = e.className.replace(' r-ns', '');
        }

        e.classList.add('product-s');
       
         //resetiranje range-bar
         slider.value=1000;
         output.textContent=1000;
         filtriranjeRange(1000);
    })
}
prikaziSve();
// ?-----------------------------------------
// !FILTRIRANJE - range

output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)


// ? preko .containera možeš jer je nodeList ali zato ne možeš (!) preko .divElementi jer je to HTML kolekcija

console.log(cijenaProizvoda[0]);

function filtriranjeRange(output) {
    Array.from(cijenaProizvoda).forEach(e => {
        let ciljaniElement = e.parentElement.parentElement.parentElement;
        let cijena = parseInt((e.textContent).replace(/\s+/g, '').trim());

        if (cijena <= parseInt(output.textContent)) {
            // ciljaniElement.classList = ciljaniElement.className.replace('product-s', 'r-ns');
            ciljaniElement.classList = ciljaniElement.className.replace('product-s', 'r-ns');
            // ciljaniElement.classList = ciljaniElement.className.replace('product-ns', '');
            
            // ciljaniElement.classList = ciljaniElement.className.replace('product-s', 'r-ns');
            // ciljaniElement.classList = ciljaniElement.className.replace('r-s', 'product-ns');
        }
        if (cijena >= parseInt(output.textContent)) {
            // ciljaniElement.classList = ciljaniElement.className.replace('r-ns', 'product-s');
            ciljaniElement.classList = ciljaniElement.className.replace('r-ns', 'product-s');
        }
     
    })
}

slider.oninput = function () {
    output.innerHTML = this.value;
    filtriranjeRange(output);
}

// ?-----------------------------------------