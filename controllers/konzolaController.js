const konzolalModel = require('../models/karakteristikeModel')
const Product = require('../models/productsModel')

module.exports = {
    selectKarakteristikeKonzola: (req, res) => {
        let id = req.params.id
        // za kosaricu:
        let products_oznaka=Product.getCart()
        konzolalModel.selectKarakteristike(function (data) {
            res.render('./Konzole/Konzola' + id + '.ejs', {
                data: data, kosarica:products_oznaka
            })
        }, id)
    },
    selectKarakteristikeKonzolaAll: (req, res) => {
        let kategorija=4;
        // za kosaricu:
        let products_oznaka=Product.getCart()
       
        konzolalModel.selectKarakteristikeAll( function (data) {   
                res.render('./Konzole/Konzola.ejs', {
                dataAll: data, kosarica:products_oznaka
            })
        },kategorija)
    },
    // Konzolee
    basketKonzole: (req, res, next) => {

        let id = req.body.id
       
        const prod = new Product(id);

        prod.save();

        res.redirect('/konzole');
    },
    // Konzolaa
    basketKonzola: (req, res, next) => {

        let id = req.body.id

        const prod = new Product(id);

        prod.save();

        res.redirect('/konzole/' + id);
    },

    

}