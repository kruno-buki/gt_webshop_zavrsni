const express = require('express')

const onamaController=require('../controllers/onamaController')
const routerOnama = express.Router();

routerOnama.get('/', onamaController.oznacavanjeKosarice)

module.exports = routerOnama