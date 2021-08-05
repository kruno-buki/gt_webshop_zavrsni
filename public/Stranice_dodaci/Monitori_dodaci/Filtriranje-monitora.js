
//! --------VARIJABLE: procesori--------------
//? VARIAJBLE za filtriranje procesora 
const monitor14_22 = Array.from(container.getElementsByClassName('monitor14_22'));
const monitor23_28 = Array.from(container.getElementsByClassName('monitor23_28'));
const monitor32 = Array.from(container.getElementsByClassName('monitor32'));


//? dohvati check-box za procesore
const btnMonitor14_22 = document.getElementById("14_22incha_monitor");
const btnMonitor23_28 = document.getElementById("23_28incha_monitor");
const btnMonitor32 = document.getElementById("32_incha_monitor");

//! MEMORIJA ------------------------------------

btnMonitor14_22.addEventListener('click', () => {
    //! ČEKIRAM
    if (btnMonitor14_22.checked) {
        filterZnacajki(monitor23_28);
        filterZnacajki(monitor32);

        if (btnMonitor23_28.checked == true) {
            filterZnacajkiAll(monitor32);//*
            filterZnacajkiAll(monitor14_22);
        }
        if (btnMonitor32.checked == true) {
            filterZnacajkiAll(monitor23_28);//*
            filterZnacajkiAll(monitor14_22);
        }

        btnMonitor23_28.checked = false;
        btnMonitor32.checked = false;
    }
    //!ODČEKIRANJE
    if (btnMonitor14_22.checked == false) {
        filterZnacajkiAll(monitor23_28);
        filterZnacajkiAll(monitor32);
        //-------
    }
})

btnMonitor23_28.addEventListener('click', () => {
    //! ČEKIRAM
    if (btnMonitor23_28.checked) {
        filterZnacajki(monitor14_22);
        filterZnacajki(monitor32);

        if (btnMonitor14_22.checked == true) {
            filterZnacajkiAll(monitor32);//*
            filterZnacajkiAll(monitor23_28);
        }
        if (btnMonitor32.checked == true) {
            filterZnacajkiAll(monitor14_22);//*
            filterZnacajkiAll(monitor23_28);
        }
        btnMonitor14_22.checked = false;
        btnMonitor32.checked = false;

    }
    //!ODČEKIRANJE
    if (btnMonitor23_28.checked == false) {
        filterZnacajkiAll(monitor14_22);
        filterZnacajkiAll(monitor32);
        //-------
    }
})

btnMonitor32.addEventListener('click', () => {

    //! ČEKIRAM
    if (btnMonitor32.checked) {
        filterZnacajki(monitor14_22);
        filterZnacajki(monitor23_28);

        if (btnMonitor14_22.checked == true) {
            filterZnacajkiAll(monitor23_28);//*
            filterZnacajkiAll(monitor32);
        }
        if (btnMonitor23_28.checked == true) {
            filterZnacajkiAll(monitor14_22);//*
            filterZnacajkiAll(monitor32);

        }
        btnMonitor14_22.checked = false;
        btnMonitor23_28.checked = false;

    }
    //!ODČEKIRANJE
    if (btnMonitor32.checked == false) {
        filterZnacajkiAll(monitor14_22);
        filterZnacajkiAll(monitor23_28);
        //-------

    }
})
