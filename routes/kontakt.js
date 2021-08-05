const express = require('express')

const kontaktController=require('../controllers/kontaktController')
const routerKontakt = express.Router();

routerKontakt.get('/', kontaktController.oznacavanjeKosarice)

module.exports = routerKontakt