const db = require('../database')
const Product = require('../models/productsModel')

const podaciZaPlacanje = []

class Naplata {
    constructor(ime, prezime, email, telefon, dob = null, grad, ulica, postaBr) {
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.telefon = telefon;
        this.dob = dob;
        this.grad = grad;
        this.ulica = ulica;
        this.postaBr = postaBr;
    }
    save() {
        if ((podaciZaPlacanje.length < 1))
            podaciZaPlacanje.push(this);
        else {
            podaciZaPlacanje.splice(0, 1, this)
        }

    }
    static ispis() {
        console.log(podaciZaPlacanje[0]);

    }
    static vracanjeNiza() {
        if (podaciZaPlacanje.length == 0)
            return 0
        else
            return podaciZaPlacanje[0]
    }
    static placanjeIDostava(placanje, dostava) {
        podaciZaPlacanje[0].placanje = placanje
        podaciZaPlacanje[0].dostava = dostava

        const sql = 'SELECT cijena FROM isporuka WHERE isporuka_id=?'

        db.query(sql, dostava, function (err, data) {
            if (err)
                throw err;

            podaciZaPlacanje[0].iznosDostave = Number(data[0].cijena).toFixed(2)

            console.log(podaciZaPlacanje[0]);
            console.log('------------------------------------------------');

        })
    }

    static vrstaPlacanja() {
        return podaciZaPlacanje[0].placanje
    }
    static umetanjeDatuma(vrstaPlacanja) {
        //gotovina
        if (vrstaPlacanja == 1) {
            podaciZaPlacanje[0].datumNarudzbe = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
            // podaciZaPlacanje[0].datumPlacanja = ''
            // console.log(podaciZaPlacanje[0]);
        }
        //kartica
        if (vrstaPlacanja == 2) {
            podaciZaPlacanje[0].datumNarudzbe = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
            podaciZaPlacanje[0].datumPlacanja = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
            console.log(podaciZaPlacanje[0]);
        }
        //gotovina
        if (vrstaPlacanja == 3) {
            podaciZaPlacanje[0].datumNarudzbe = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
            // podaciZaPlacanje[0].datumPlacanja = ''
            // console.log(podaciZaPlacanje[0]);
        }
    }

    static isprazni() {
       
        podaciZaPlacanje.splice(0)
        console.log(podaciZaPlacanje);
    }

    static umetanjeKupacTablica() {
        let ime = podaciZaPlacanje[0].ime
        let prezime = podaciZaPlacanje[0].prezime
        let email = podaciZaPlacanje[0].email
        let telefon = podaciZaPlacanje[0].telefon
        let dob = podaciZaPlacanje[0].dob
        let grad = podaciZaPlacanje[0].grad
        let ulica = podaciZaPlacanje[0].ulica
        let postaBr = podaciZaPlacanje[0].postaBr

        let sql = 'INSERT INTO kupac( ime, prezime, email, brojTelefona, datumRođenja, grad, adresa, postanskiBroj) VALUES (?,?,?,?,?,?,?,?) '

        let vrijednosti = [ime, prezime, email, telefon, dob, grad, ulica, postaBr]

        db.query(sql, vrijednosti, (err, data) => {
            if (err)
                throw err
            console.log('Uspješno si uplodao tablicu KUPAC -> broj zapisa: ' + data.affectedRows);
            // return
        })

    }
    static umetanjeNarudzbaTablica() {
        let products = Product.getCart()
        console.log(products);
        let datumNarudzbe = podaciZaPlacanje[0].datumNarudzbe
        let datumPlacanja = podaciZaPlacanje[0].datumPlacanja
        let ukupanIznos = products[0].total

        let isporuka_id = podaciZaPlacanje[0].dostava
        let metoda_id = podaciZaPlacanje[0].placanje

        let sql = 'INSERT INTO narudzba( datumNarudzbe, datum_placanja, ukupanIznos,	isporuka_isporuka_ID, metoda_placanja_metoda_ID, kupac_kupac_ID ) VALUES (?,?,?,?,?,(SELECT MAX(kupac_ID) FROM kupac)) '

        let vrijednosti = [datumNarudzbe, datumPlacanja, ukupanIznos, isporuka_id, metoda_id]

        db.query(sql, vrijednosti, (err, data) => {
            if (err)
                throw err
            console.log('Uspješno si uplodao tablicu NARUDZBA -> broj zapisa: ' + data.affectedRows);

        })
    }
    //! STAVKE 
    static umetanjeStavkaTablica() {
        let products = Product.getCart()
        products = products.slice(1, products.length)


        // let artikl_id = products[0].artikl_ID
        // let kolicina = products[0].kolicina
        // let popust = products[0].postotak

        let i = 1;
        products.forEach(p => {
            
            let artikl_id = p.artikl_ID
            let kolicina = p.kolicina
            let popust = p.postotak
            let cijena=p.cijena

            let sql = 'INSERT INTO stavka(stavka_id,kolicina, popust, artikl_artikl_ID,cijenaProizvoda, narudzba_narudzba_ID ) VALUES (?,?,?,?,?,(SELECT MAX(narudzba_ID) FROM narudzba)) '

            let vrijednosti = [i,kolicina, popust, artikl_id,cijena]

            db.query(sql, vrijednosti, (err, data) => {
                if (err)
                    throw err
                console.log('Uspješno si uplodao tablicu STAVKA -> broj zapisa: ' + data.affectedRows);

            })
            i++;


        })
        
    }

    //! artikl TABLICA 
    static updateArtiklTablica() {
        let products = Product.getCart()
        products = products.slice(1, products.length)
        console.log('------------PRIJE UPDATEanje TABLICE ARTIKLA: ', products);

        // let artikl_id = products[0].artikl_ID
        // let kolicina=products[0].kolicina
      
        products.forEach(p => {
            
            let artikl_id = p.artikl_ID
            let kolicina =p.stanje- p.kolicina
           

            let sql = 'UPDATE artikl SET stanje=? WHERE artikl_ID=?'

            let vrijednosti = [kolicina, artikl_id]

            db.query(sql, vrijednosti, (err, data) => {
                if (err)
                    throw err
                console.log('Uspješno si uplodao tablicu ARTIKL -> broj zapisa: ' + data.affectedRows);

            })
       


        })
        console.log('ZAVRŠENO UPDATEANJE TABLICE artikl :', products);
        
    }

}



module.exports = Naplata