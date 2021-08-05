const laptopModel = require('../models/karakteristikeModel')
const Product = require('../models/productsModel')

module.exports = {
    selectKarakteristikeLaptop: (req, res) => {
        let id = req.params.id
        //za kosaricu
        let products_oznaka=Product.getCart()
        laptopModel.selectKarakteristike(function (data) {
            res.render('./Laptopi/Laptop' + id + '.ejs', {
                data: data, kosarica:products_oznaka
            })
        }, id)
    },
    selectKarakteristikeLaptopAll: (req, res) => {
        let kategorija=1;
        //za kosaricu
        let products_oznaka=Product.getCart()
        laptopModel.selectKarakteristikeAll(function (data) {
            res.render('./Laptopi/Laptop.ejs', {
                dataAll: data, kosarica:products_oznaka
            })
        },kategorija)
    },
    basketLaptopi: (req, res, next) => {

        let id = req.body.id
        
        const prod = new Product(id);

       prod.save();
       
        res.redirect('/laptopi');
    },
    basketLaptop: (req, res, next) => {

        let id = req.body.id

        const prod = new Product(id);

        prod.save();

        res.redirect('/laptopi/' + id);
    }
}