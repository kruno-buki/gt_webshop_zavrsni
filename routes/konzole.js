const express = require('express')

const konzolaController = require('../controllers/konzolaController')
const routerKonzola = express.Router();

routerKonzola.get('/', konzolaController.selectKarakteristikeKonzolaAll)

routerKonzola.get('/:id', konzolaController.selectKarakteristikeKonzola)

routerKonzola.post('/', konzolaController.basketKonzole)
routerKonzola.post('/:id', konzolaController.basketKonzola)

module.exports = routerKonzola