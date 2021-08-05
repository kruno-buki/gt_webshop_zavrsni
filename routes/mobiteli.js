const express=require('express')

const mobitelController=require('../controllers/mobitelController')
const routerMobiteli=express.Router();

routerMobiteli.get('/',mobitelController.selectKarakteristikeMobitelAll)

routerMobiteli.get('/:id',mobitelController.selectKarakteristikeMobitel)

routerMobiteli.post('/', mobitelController.basketMobiteli)
routerMobiteli.post('/:id', mobitelController.basketMobitel)

module.exports=routerMobiteli