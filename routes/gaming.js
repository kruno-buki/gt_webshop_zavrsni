const express = require('express')

const gamingController=require('../controllers/gamingController')
const routerGaming = express.Router();

routerGaming.get('/', gamingController.oznacavanjeKosarice)

module.exports = routerGaming