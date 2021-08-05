const express = require('express')

const businessController=require('../controllers/businessController')
const routerBusiness = express.Router();

routerBusiness.get('/', businessController.oznacavanjeKosarice)

module.exports = routerBusiness