console.log('hello world!!');

const kreditna = document.getElementById('kreditna')
const pouzece = document.getElementById('pouzece')
const gotovina = document.getElementById('gotovina')


kreditna.addEventListener('click', () => {
    // aaa[0].classList.toggle('active-odabir')

    activKlasa(0);

})

pouzece.addEventListener('click', () => {

    activKlasa(1);;

})

gotovina.addEventListener('click', () => {
    activKlasa(2);

})


function activKlasa(br) {
    let div = document.querySelectorAll('.no-active');

    for (let i = 0; i < div.length; i++) {
        

        if (div[i].classList == "active") {

            div[i].classList.add('no-active')
            console.log('ISPIS:' + div[i].classList);
        } else
            div[i].classList.remove('active-odabir')
    }
    div[br].classList.toggle('active-odabir')

}