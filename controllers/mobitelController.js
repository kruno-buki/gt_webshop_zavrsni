const mobitellModel = require('../models/karakteristikeModel')
const Product = require('../models/productsModel')

module.exports = {
    selectKarakteristikeMobitel: (req, res) => {
        let id = req.params.id
        //za kosaricu
        let products_oznaka=Product.getCart()
        mobitellModel.selectKarakteristike(function (data) {
            res.render('./Mobiteli/Mobitel' + id + '.ejs', {
                data: data,kosarica:products_oznaka
            })
        }, id)
    },
    selectKarakteristikeMobitelAll: (req, res) => {
        let kategorija=2
        //za kosaricu
        let products_oznaka=Product.getCart()
        mobitellModel.selectKarakteristikeAll(function (data) {
            res.render('./Mobiteli/Mobitel.ejs', {
                dataAll: data,kosarica:products_oznaka
            })
        },kategorija)
    },

    basketMobiteli: (req, res, next) => {

        let id = req.body.id
      
        const prod = new Product(id);

       prod.save();
       

        res.redirect('/mobiteli');
    },
    basketMobitel: (req, res, next) => {

        let id = req.body.id

        const prod = new Product(id);

        prod.save();

        res.redirect('/mobiteli/' + id);
    }

}