const Product = require('../models/productsModel')


module.exports = {
    oznacavanjeKosarice: (req,res)=>{
        // za kosaricu:
        let products_oznaka=Product.getCart()
       
        res.render('./Gaming/Gaming.ejs', {
            kosarica:products_oznaka
            })

    }
}