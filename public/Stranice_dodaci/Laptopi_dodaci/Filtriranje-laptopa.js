//! --------VARIJABLE: procesori--------------
//? VARIAJBLE za filtriranje procesora 
const procesoriAMD = Array.from(container.getElementsByClassName('amd'));
const procesoriIntel = Array.from(container.getElementsByClassName('intel'));


//? dohvati check-box za procesore
const btnProcesorIntel = document.getElementById("intel-procesor");
const btnProcesorAMD = document.getElementById("amd-procesor");
// ! -----------------------
// ! ------------ VARIJABLE: grafička kartica -----------
//? za PRIKAZ: grafičke kartice

const graphicIntegrirana = Array.from(container.getElementsByClassName('integrirana'));
const graphicZasebna = Array.from(container.getElementsByClassName('zasebna'));

//? dohvati check-box za procesore
const btnGraphicIntegrirana = document.getElementById("integriranaKartica");
const btnGraphicZasebna = document.getElementById("zasebnaKartica");
// ! -----------------------
// ! ------------ VARIJABLE: veličina ekrana -----------
//? za PRIKAZ: grafičke kartice

const ekran14 = Array.from(container.getElementsByClassName('ekran14'));
const ekran15 = Array.from(container.getElementsByClassName('ekran15'));
const ekran17 = Array.from(container.getElementsByClassName('ekran17'))

//? dohvati check-box za procesore
const btn14Inch = document.getElementById("14incha");
const btn15Inch = document.getElementById("15incha");
const btn17Inch = document.getElementById("17incha");
// ! -----------------------
// ! ------------ VARIJABLE: memorija -----------
//? za PRIKAZ: grafičke kartice

const memorija4 = Array.from(container.getElementsByClassName('memorija4'));
const memorija8 = Array.from(container.getElementsByClassName('memorija8'));
const memorija16 = Array.from(container.getElementsByClassName('memorija16'))

//? dohvati check-box za procesore
const btn4Gb = document.getElementById("mem4gb");
const btn8Gb = document.getElementById("mem8gb");
const btn16Gb = document.getElementById("mem16gb");
// ! -----------------------
// ! ------------ VARIJABLE: DISK -----------
//? za PRIKAZ: grafičke kartice

const disk256 = Array.from(container.getElementsByClassName('disk256'));
const disk512 = Array.from(container.getElementsByClassName('disk512'));

//? dohvati check-box za procesore
const btn256 = document.getElementById("d256");
const btn512 = document.getElementById("d512");
// ! ---------------------------------------------------------------------------
//! FILTRIRANJE PROCESORA
//? EVENT LISTENER ....za procesor button

btnProcesorIntel.addEventListener('click', () => {
    //! Check 
    if (btnProcesorIntel.checked) {
        filterZnacajki(procesoriAMD);
        niz.push(procesoriAMD)
        if (btnProcesorAMD.checked == true) {
            filterZnacajkiAll(procesoriIntel);
            //  resetirajBtns();//*
        }
        btnProcesorAMD.checked = false;

    }
    //!ODČEKIRANJE
    if (btnProcesorIntel.checked == false) {
        filterZnacajkiAll(procesoriAMD);
        //-------

    }

})

btnProcesorAMD.addEventListener('click', () => {
    //! ČEKIRAM 1. .actove
    if (btnProcesorAMD.checked) {

        filterZnacajki(procesoriIntel);
        niz.push(procesoriIntel);
        if (btnProcesorIntel.checked == true) {
            filterZnacajkiAll(procesoriAMD);
            //  resetirajBtns();//*
        }
        btnProcesorIntel.checked = false;

    }
    //!ODČEKIRANJE
    if (btnProcesorAMD.checked == false) {
        filterZnacajkiAll(procesoriIntel);
        //-------

    }
})

//! FILTRIRANJE GRAFIČKE------------------------------------

btnGraphicIntegrirana.addEventListener('click', () => {
    //! Check

    if (btnGraphicIntegrirana.checked) {
        filterZnacajki(graphicZasebna);
        if (btnGraphicZasebna.checked == true) {
            filterZnacajkiAll(graphicIntegrirana);
            // resetirajBtns();//*
        }
        btnGraphicZasebna.checked = false;

    }
    //! Off-Check
    if (btnGraphicIntegrirana.checked == false) {
        filterZnacajkiAll(graphicZasebna);
        //-------

    }
})
btnGraphicZasebna.addEventListener('click', () => {
    //! Check 

    if (btnGraphicZasebna.checked) {
        filterZnacajki(graphicIntegrirana);
        if (btnGraphicIntegrirana.checked == true) {
            filterZnacajkiAll(graphicZasebna);
            //  resetirajBtns();//*
        }
        btnGraphicIntegrirana.checked = false;

    }
    //! Off-Check
    if (btnGraphicZasebna.checked == false) {
        filterZnacajkiAll(graphicIntegrirana);
        //-------

    }
})

//! VELIČINE EKRANA ------------------------------------

btn14Inch.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn14Inch.checked) {
        filterZnacajki(ekran17);
        filterZnacajki(ekran15);
        if (btn17Inch.checked == true) {
            filterZnacajkiAll(ekran15);//*
            filterZnacajkiAll(ekran14);
        }
        if (btn15Inch.checked == true) {
            filterZnacajkiAll(ekran17);//*
            filterZnacajkiAll(ekran14);
            //   resetirajBtns();//*
        }
        btn17Inch.checked = false;
        btn15Inch.checked = false;

    }
    //!ODČEKIRANJE
    if (btn14Inch.checked == false) {
        filterZnacajkiAll(ekran17);
        filterZnacajkiAll(ekran15);
        //-------

    }
})


btn15Inch.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn15Inch.checked) {
        filterZnacajki(ekran14);
        filterZnacajki(ekran17);
        if (btn14Inch.checked == true) {
            filterZnacajkiAll(ekran17);//*
            filterZnacajkiAll(ekran15);
        }
        if (btn17Inch.checked == true) {
            filterZnacajkiAll(ekran14);//*
            filterZnacajkiAll(ekran15);
        }
        btn17Inch.checked = false;
        btn14Inch.checked = false;

    }
    //!ODČEKIRANJE
    if (btn15Inch.checked == false) {
        filterZnacajkiAll(ekran17);
        filterZnacajkiAll(ekran14);
        //-------


    }
})
btn17Inch.addEventListener('click', () => {
    //! ČEKIRAM 1. .actove

    if (btn17Inch.checked) {
        filterZnacajki(ekran14);
        filterZnacajki(ekran15);
        if (btn14Inch.checked == true) {
            filterZnacajkiAll(ekran15);//*
            filterZnacajkiAll(ekran17);
        }
        if (btn15Inch.checked == true) {
            filterZnacajkiAll(ekran14);//*
            filterZnacajkiAll(ekran17);
        }
        btn14Inch.checked = false;
        btn15Inch.checked = false;
    }
    //!ODČEKIRANJE
    if (btn17Inch.checked == false) {
        filterZnacajkiAll(ekran14);
        filterZnacajkiAll(ekran15);
        //-------
    }
})

//! MEMORIJA ------------------------------------

btn4Gb.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn4Gb.checked) {
        filterZnacajki(memorija8);
        filterZnacajki(memorija16);

        if (btn8Gb.checked == true) {
            filterZnacajkiAll(memorija16);//*
            filterZnacajkiAll(memorija4);
        }
        if (btn16Gb.checked == true) {
            filterZnacajkiAll(memorija8);//*
            filterZnacajkiAll(memorija4);
        }

        btn8Gb.checked = false;
        btn16Gb.checked = false;

    }
    //!ODČEKIRANJE
    if (btn4Gb.checked == false) {
        filterZnacajkiAll(memorija8);
        filterZnacajkiAll(memorija16);
        //-------
    }
})
btn8Gb.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn8Gb.checked) {
        filterZnacajki(memorija4);
        filterZnacajki(memorija16);

        if (btn4Gb.checked == true) {
            filterZnacajkiAll(memorija16);//*
            filterZnacajkiAll(memorija8);
        }
        if (btn16Gb.checked == true) {
            filterZnacajkiAll(memorija4);//*
            filterZnacajkiAll(memorija8);
        }
        btn4Gb.checked = false;
        btn16Gb.checked = false;

    }
    //!ODČEKIRANJE
    if (btn8Gb.checked == false) {
        filterZnacajkiAll(memorija4);
        filterZnacajkiAll(memorija16);
        //-------
    }

})
btn16Gb.addEventListener('click', () => {

    //! ČEKIRAM
    if (btn16Gb.checked) {
        filterZnacajki(memorija4);
        filterZnacajki(memorija8);
        if (btn4Gb.checked == true) {
            filterZnacajkiAll(memorija8);//*
            filterZnacajkiAll(memorija16);
        }
        if (btn8Gb.checked == true) {
            filterZnacajkiAll(memorija4);//*
            filterZnacajkiAll(memorija16);

        }
        btn4Gb.checked = false;
        btn8Gb.checked = false;

    }
    //!ODČEKIRANJE
    if (btn16Gb.checked == false) {
        filterZnacajkiAll(memorija4);
        filterZnacajkiAll(memorija8);
        //-------

    }
})
//! FILTRIRANJE DISK------------------------------------

btn256.addEventListener('click', () => {
    //! ČEKIRAM
    if (btn256.checked) {
        filterZnacajki(disk512);
        if (btn512.checked == true) {
            filterZnacajkiAll(disk256);
            // resetirajBtns();//*
        }
        btn512.checked = false;

    }
    //!ODČEKIRANJE
    if (btn256.checked == false) {
        filterZnacajkiAll(disk512);
        //-------
    }
})
btn512.addEventListener('click', () => {
    //! ČEKIRAM 1. .actove

    if (btn512.checked) {
        filterZnacajki(disk256);
        if (btn256.checked == true) {
            filterZnacajkiAll(disk512);
            //  resetirajBtns();//*
        }
        btn256.checked = false;

    }
    //!ODČEKIRANJE
    if (btn512.checked == false) {
        filterZnacajkiAll(disk256);
        //-------        
    }
})