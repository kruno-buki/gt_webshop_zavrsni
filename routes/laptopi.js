const express=require('express')

const laptopController=require('../controllers/laptopController')

const routerLaptop=express.Router();

routerLaptop.get('/', laptopController.selectKarakteristikeLaptopAll)

routerLaptop.get('/:id',laptopController.selectKarakteristikeLaptop)

// routerLaptop.post('/:id',laptopController.basketLaptop)

routerLaptop.post('/', laptopController.basketLaptopi)
routerLaptop.post('/:id', laptopController.basketLaptop)

module.exports=routerLaptop