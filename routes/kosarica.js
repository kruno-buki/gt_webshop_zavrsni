const express=require('express')
const kosaraController=require('../controllers/kosaraController')

const routerKosara=express.Router();


routerKosara.get('/kosarica', kosaraController.getCart);

routerKosara.post('/kosarica/brisanje',kosaraController.brisanjeProizvodaKosara)

routerKosara.post('/kosarica/dodavanje',kosaraController.dodavanjeProizvodaKosara)

routerKosara.post('/kosarica/oduzimanje',kosaraController.oduzimanjeProizvodaKosara)

module.exports=routerKosara