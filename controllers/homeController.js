const Product = require('../models/productsModel')


module.exports = {
    oznacavanjeKosarice: (req,res)=>{
        // za kosaricu:
        let products_oznaka=Product.getCart()

        res.render('./Home/Home.ejs', {
                kosarica:products_oznaka
            })

    }
}