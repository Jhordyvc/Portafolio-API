var express=require('express');
var router=express.Router();
var principalController=require('../Controller/principalController');

//registrar
router.post('/api/addPrincipal',principalController.mntPrincipal);
//update
router.put('/api/updatePrincipal',principalController.mntPrincipal);
//delete
router.put('/api/removePrincipal',principalController.mntPrincipal);
//activate
router.put('/api/activatePrincipal',principalController.mntPrincipal);
//listar
router.get('/api/listarPrincipal/:opcion/:estado',principalController.listarPrincipal);

module.exports=router;