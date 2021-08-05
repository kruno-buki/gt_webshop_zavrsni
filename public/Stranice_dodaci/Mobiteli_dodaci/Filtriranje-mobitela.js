//! --------VARIJABLE: filter radne memorije--------------
const mem3_m = Array.from(container.getElementsByClassName('memorija3_m'));
const mem4_m = Array.from(container.getElementsByClassName('memorija4_m'));
const mem6_m = Array.from(container.getElementsByClassName('memorija6_m'));
const mem8_m = Array.from(container.getElementsByClassName('memorija8_m'));

//? dohvati check-box za procesore
const btn3Gb_m = document.getElementById("mem3gb-m");
const btn4Gb_m = document.getElementById("mem4gb-m");
const btn6Gb_m = document.getElementById("mem6gb-m");
const btn8Gb_m = document.getElementById("mem8gb-m");

//! --------VARIJABLE: filter pohrane--------------
const disk64_m = Array.from(container.getElementsByClassName('disk64gb-m'));
const disk128_m = Array.from(container.getElementsByClassName('disk128gb-m'));
const disk256_m = Array.from(container.getElementsByClassName('disk256gb-m'));

const btn64_m = document.getElementById("d64gb-m");
const btn128_m = document.getElementById("d128gb-m");
const btn256_m = document.getElementById("d256gb-m");

//!---------------FILTRIRANJE R-A-M---------------------

btn3Gb_m.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn3Gb_m.checked) {
        filterZnacajki(mem4_m);
        filterZnacajki(mem6_m);
        filterZnacajki(mem8_m);
        

        if (btn4Gb_m.checked == true) {
            filterZnacajkiAll(mem6_m);
            filterZnacajkiAll(mem8_m);
            filterZnacajkiAll(mem3_m);

        }
        if (btn6Gb_m.checked == true) {
            filterZnacajkiAll(mem4_m);
            filterZnacajkiAll(mem8_m);
            filterZnacajkiAll(mem3_m);

        }
        if (btn8Gb_m.checked == true) {
            filterZnacajkiAll(mem4_m);
            filterZnacajkiAll(mem6_m);
            filterZnacajkiAll(mem3_m);
            
        }
        btn4Gb_m.checked = false;
        btn6Gb_m.checked = false;
        btn8Gb_m.checked = false;
    }
    //!ODČEKIRANJE
    if (btn3Gb_m.checked == false) {
        filterZnacajkiAll(mem4_m);
        filterZnacajkiAll(mem6_m);
        filterZnacajkiAll(mem8_m)
    }
})


btn4Gb_m.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn4Gb_m.checked) {
        filterZnacajki(mem3_m);
        filterZnacajki(mem6_m);
        filterZnacajki(mem8_m);

        if (btn3Gb_m.checked == true) {
            filterZnacajkiAll(mem8_m);//*
            filterZnacajkiAll(mem6_m);//*
            filterZnacajkiAll(mem4_m);
        }
        if (btn6Gb_m.checked == true) {
            filterZnacajkiAll(mem3_m);//*
            filterZnacajkiAll(mem8_m);//*
            filterZnacajkiAll(mem4_m);
        }
        if (btn8Gb_m.checked == true) {
            filterZnacajkiAll(mem3_m);//*
            filterZnacajkiAll(mem6_m);//*
            filterZnacajkiAll(mem4_m);
        }
        btn3Gb_m.checked = false;
        btn6Gb_m.checked = false;
        btn8Gb_m.checked = false;

    }
    //!ODČEKIRANJE
    if (btn4Gb_m.checked == false) {
        filterZnacajkiAll(mem3_m);
        filterZnacajkiAll(mem6_m);
        filterZnacajkiAll(mem8_m);
    }
})
btn6Gb_m.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn6Gb_m.checked) {
        filterZnacajki(mem3_m);
        filterZnacajki(mem4_m);
        filterZnacajki(mem8_m);

        if (btn3Gb_m.checked == true) {
            filterZnacajkiAll(mem4_m);//*
            filterZnacajkiAll(mem8_m);//*
            filterZnacajkiAll(mem6_m);
        }
        if (btn4Gb_m.checked == true) {
            filterZnacajkiAll(mem3_m);//*
            filterZnacajkiAll(mem8_m);//*
            filterZnacajkiAll(mem6_m);
        }
        if (btn8Gb_m.checked == true) {
            filterZnacajkiAll(mem3_m);//*
            filterZnacajkiAll(mem4_m);//*
            filterZnacajkiAll(mem6_m);
        }
        btn3Gb_m.checked = false;
        btn4Gb_m.checked = false;
        btn8Gb_m.checked = false;

    }
    //!ODČEKIRANJE
    if (btn6Gb_m.checked == false) {
        filterZnacajkiAll(mem3_m);
        filterZnacajkiAll(mem4_m);
        filterZnacajkiAll(mem8_m);
    }
})
btn8Gb_m.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn8Gb_m.checked) {
        filterZnacajki(mem3_m);
        filterZnacajki(mem4_m);
        filterZnacajki(mem6_m);

        if (btn3Gb_m.checked == true) {
            filterZnacajkiAll(mem4_m);//*
            filterZnacajkiAll(mem6_m);//*
            filterZnacajkiAll(mem8_m);
        }
        if (btn4Gb_m.checked == true) {
            filterZnacajkiAll(mem3_m);//*
            filterZnacajkiAll(mem6_m);//*
            filterZnacajkiAll(mem8_m);
        }
        if (btn6Gb_m.checked == true) {
            filterZnacajkiAll(mem3_m);//*
            filterZnacajkiAll(mem4_m);//*
            filterZnacajkiAll(mem8_m);
        }
        btn3Gb_m.checked = false;
        btn4Gb_m.checked = false;
        btn6Gb_m.checked = false;
        

    }
    //!ODČEKIRANJE
    if (btn8Gb_m.checked == false) {
        filterZnacajkiAll(mem3_m);
        filterZnacajkiAll(mem4_m);
        filterZnacajkiAll(mem6_m);
    }
})
//!---------------FILTRIRANJE MEMORIJE---------------------

btn64_m.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn64_m.checked) {
        filterZnacajki(disk128_m);
        filterZnacajki(disk256_m);
        if (btn128_m.checked == true) {
            filterZnacajkiAll(disk256_m);//*
            filterZnacajkiAll(disk64_m);
        }
        if (btn256_m.checked == true) {
            filterZnacajkiAll(disk128_m);//*
            filterZnacajkiAll(disk64_m);
        }
        btn128_m.checked = false;
        btn256_m.checked = false;

    }
    //!ODČEKIRANJE
    if (btn64_m.checked == false) {
        filterZnacajkiAll(disk128_m);
        filterZnacajkiAll(disk256_m);
    }
})

btn128_m.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn128_m.checked) {
        filterZnacajki(disk64_m);
        filterZnacajki(disk256_m);
        if (btn64_m.checked == true) {
            filterZnacajkiAll(disk256_m);//*
            filterZnacajkiAll(disk128_m);
        }
        if (btn256_m.checked == true) {
            filterZnacajkiAll(disk64_m);//*
            filterZnacajkiAll(disk128_m);
        }
        btn64_m.checked = false;
        btn256_m.checked = false;

    }
    //!ODČEKIRANJE
    if (btn128_m.checked == false) {
        filterZnacajkiAll(disk64_m);
        filterZnacajkiAll(disk256_m);
    }
})
btn256_m.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn256_m.checked) {
        filterZnacajki(disk64_m);
        filterZnacajki(disk128_m);
        if (btn64_m.checked == true) {
            filterZnacajkiAll(disk128_m);//*
            filterZnacajkiAll(disk256_m);
        }
        if (btn128_m.checked == true) {
            filterZnacajkiAll(disk64_m);//*
            filterZnacajkiAll(disk256_m);
        }
        btn64_m.checked = false;
        btn128_m.checked = false;

    }
    //!ODČEKIRANJE
    if (btn256_m.checked == false) {
        filterZnacajkiAll(disk64_m);
        filterZnacajkiAll(disk128_m);
    }
})