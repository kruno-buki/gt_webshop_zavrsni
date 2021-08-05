const express = require('express')

// const homeController=require('../controllers/homeController')
const akcijaController = require('../controllers/akcijaController')
const routerAkcija = express.Router();

// routerAkcija.get('/', (req, res) => {
//     res.render('./Akcije/Akcija.ejs')
// })

routerAkcija.get('/', akcijaController.selectKarakteristikeAkcijaAll)

routerAkcija.get('/:id', akcijaController.selectKarakteristikeAkcija)

routerAkcija.post('/', akcijaController.basketAkcije)
routerAkcija.post('/:id', akcijaController.basketAkcija)

module.exports = routerAkcija