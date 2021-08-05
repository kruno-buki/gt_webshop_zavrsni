const express=require('express')

const monitorController=require('../controllers/monitorController')
const routerMonitor=express.Router();

routerMonitor.get('/', monitorController.selectKarakteristikeMonitorAll)

// routerMonitor.get('/:id',monitorController.selectPriceMonitor)
routerMonitor.get('/:id', monitorController.selectKarakteristikeMonitor)


routerMonitor.post('/', monitorController.basketMonitori)
routerMonitor.post('/:id', monitorController.basketMonitor)

module.exports=routerMonitor