const monitorModel = require('../models/karakteristikeModel')
const Product = require('../models/productsModel')

module.exports = {
    selectKarakteristikeMonitor: (req, res) => {
        let id = req.params.id
        //za kosaricu
        let products_oznaka=Product.getCart()
        monitorModel.selectKarakteristike(function (data) {
            res.render('./Monitori/Monitor' + id + '.ejs', {
                data: data,kosarica:products_oznaka
            })
        }, id)
    },
    selectKarakteristikeMonitorAll: (req, res) => {
        let kategorija=3;
        //za kosaricu
        let products_oznaka=Product.getCart()
        monitorModel.selectKarakteristikeAll(function (data) {
            res.render('./Monitori/Monitor.ejs', {
                dataAll: data, kosarica: products_oznaka
            })
        },kategorija)
    },

    basketMonitori: (req, res, next) => {

        let id = req.body.id
    
        const prod = new Product(id);

        prod.save();
             
        res.redirect('/monitori');
    },

    basketMonitor: (req, res, next) => {

        let id = req.body.id

        const prod = new Product(id);

        prod.save();

        res.redirect('/monitori/' + id);
    }

}