const express = require('express')

const homeController=require('../controllers/homeController')
const routerHome = express.Router();

// routerHome.get('/', (req, res) => {
//     res.render('./Home/Home.ejs')
// })
routerHome.get('/', homeController.oznacavanjeKosarice)

module.exports = routerHome