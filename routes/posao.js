const express = require('express')

const posaoController=require('../controllers/posaoController')
const routerPosao = express.Router();

routerPosao.get('/', posaoController.oznacavanjeKosarice)

module.exports = routerPosao