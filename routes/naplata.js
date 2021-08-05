const express = require('express')
const naplataController=require('../controllers/naplataController')

const routerNaplata=express.Router();

routerNaplata.get('/naplata/:korak',naplataController.getForm)

routerNaplata.post('/naplata/:korak',naplataController.postForm)


module.exports=routerNaplata
