const akcijalModel = require('../models/karakteristikeModel')
const Product = require('../models/productsModel')

module.exports = {
    selectKarakteristikeAkcija: (req, res) => {
        let id = req.params.id
        //za kosaricu
        let products_oznaka=Product.getCart()
        akcijalModel.selectKarakteristike(function (data) {
            res.render('./Akcije/Akcija' + id + '.ejs', {
                data: data, kosarica:products_oznaka
            })
        }, id)
    },
    selectKarakteristikeAkcijaAll: (req, res) => {
        //za kosaricu
        let products_oznaka=Product.getCart()
        akcijalModel.selectKarakteristikeAkcija( function (data) {   
            // console.log(data);
                res.render('./Akcije/Akcija.ejs', {
                dataAll: data, kosarica:products_oznaka
            })
        })
    },
    // Akcijeeee
    basketAkcije: (req, res, next) => {

        let id = req.body.id
       
        const prod = new Product(id);

        prod.save();

        res.redirect('/akcije');
    },

    // Akcijaaa
    basketAkcija: (req, res, next) => {

        let id = req.body.id

        const prod = new Product(id);

        prod.save();

        res.redirect('/akcije/' + id);
    },

    

}
