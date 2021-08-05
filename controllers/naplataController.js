const naplataModel = require('../models/naplataModel');
const Product = require('../models/productsModel')


//!  --------------- GET ---------------

exports.getForm = (req, res) => {
    let param = req.params.korak
    console.log(param);

    if (param == 1) {

        return res.render('./Naplata/Naplata_korak_1.ejs')
    }
    if (param == 2) {
        if (naplataModel.vracanjeNiza() !== 0) {
            let data = naplataModel.vracanjeNiza()

            return res.render('./Naplata/Naplata_korak_2_informacije.ejs', {
                data: data
            })
        } else
            return res.render('./Naplata/Naplata_korak_2_informacije.ejs', data = '')
    }
    if (param == 3) {

        if (naplataModel.vracanjeNiza() !== 0) {
            let data = naplataModel.vracanjeNiza()

            return res.render('./Naplata/Naplata_korak_3_placanje.ejs', {
                data: data
            })
        } else
            return res.render('./Naplata/Naplata_korak_3_placanje.ejs', data = '')

    }
    if (param == 4) {
        if (naplataModel.vracanjeNiza() !== 0) {
            let data1 = naplataModel.vracanjeNiza()
            let data2 = Product.getCart()
            return res.render('./Naplata/Naplata_korak_4_pregled.ejs', {
                dataInfo: data1,
                dataProduct: data2
            })
        } else
            return res.render('./Naplata/Naplata_korak_4_pregled.ejs', data = '')

    }
    if (param == 'karticno') {
        res.render('./Naplata/Naplata_korak_4_kartica.ejs')
    }
    if (param == 'pouzece') {
        let data1 = naplataModel.vracanjeNiza()
        let data2 = Product.getCart()
        res.render('./Naplata/Naplata_korak_4_pouzece.ejs', {
            dataInfo: data1,
            dataProduct: data2
        })
    }
    if (param == 'gotovina') {
        let data1 = naplataModel.vracanjeNiza()
       
        let data2 = Product.getCart()
        res.render('./Naplata/Naplata_korak_4_gotovina.ejs', {
            dataInfo: data1,
            dataProduct: data2
        })
    }

    if (param == 5) {
        return res.render('./Naplata/Naplata_korak_5_zavrsetakKupovine.ejs')
    }
   
   

}
// ! --------------- POST ---------------
exports.postForm = (req, res) => {
    let param = req.params.korak

    if (param == 2) {
        const ime = req.body.ime
        const prezime = req.body.prezime
        const email = req.body.email
        const telefon = req.body.telefon
        const dob = req.body.dob
        const grad = req.body.grad
        const ulica = req.body.ulica
        const postaBr = req.body.postaBr

        //!KROZ novu instancu
        const postupakNaplate = new naplataModel(ime, prezime, email, telefon, dob, grad, ulica, postaBr)
        postupakNaplate.save();
        naplataModel.ispis(); //radi provjere

        res.redirect('/naplata/3')
    }

    if (param == 3) {
        let tip_placanja = req.body.placanje
        let tip_dostave = req.body.dostava
        naplataModel.placanjeIDostava(tip_placanja, tip_dostave)
        naplataModel.ispis();

        res.redirect('/naplata/4')
    }

    if (param == 4) {
        let vrstaPlacanja = naplataModel.vrstaPlacanja()

        if (vrstaPlacanja == 1) {
            naplataModel.umetanjeDatuma(vrstaPlacanja)

            // zaKraj()

            // naplataModel.isprazni()
            // Product.isprazni()

            return res.redirect('/naplata/pouzece')
        }
        if (vrstaPlacanja == 2) {
            naplataModel.umetanjeDatuma(vrstaPlacanja)

            // naplataModel.umetanjeInformacijaKupac()

            return res.redirect('/naplata/karticno')
        }
        if (vrstaPlacanja == 3) {
            naplataModel.umetanjeDatuma(vrstaPlacanja)

            // zaKraj()

            return res.redirect('/naplata/gotovina')
        }

    }

    if (param == 5) {


        zaKraj()

        res.redirect('/naplata/5')

    }
    if(param =='end'){
        zaKraj()
        return res.redirect('/')
     }

}
const zaKraj= function(){
    try {
         naplataModel.umetanjeKupacTablica()
        
         naplataModel.umetanjeNarudzbaTablica()
         naplataModel.umetanjeStavkaTablica()
        
         naplataModel.updateArtiklTablica()
         Product.isprazni()
         naplataModel.isprazni()
    } catch (err) {
        return (err)
    }

}