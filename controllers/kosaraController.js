const Product = require('../models/productsModel')



exports.getCart = (req, res, next) => {
  let data = Product.getCart()
  res.render('./Kosarica/Kosarica-view.ejs', {
    data: data
  })

}
exports.brisanjeProizvodaKosara = (req, res) => {

  Product.delete(req.body.prodId)
  
  res.redirect('/kosarica');
}

exports.dodavanjeProizvodaKosara = (req, res) => {
  console.log('ID onoga što želim dodati(kontroler): ',req.body.prodId);
  Product.dodajKolicina(req.body.prodId)
  res.redirect('/kosarica');
}

exports.oduzimanjeProizvodaKosara = (req, res) => {
  console.log(req.body.prodId);
  Product.oduzmiKolicina(req.body.prodId)
  res.redirect('/kosarica');
}