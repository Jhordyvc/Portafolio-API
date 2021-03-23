var express=require('express');
var router=express.Router();
var redesController=require('../Controller/redesController');

//registrar
router.post('/api/addRedes',redesController.mntRedes);
//update
router.put('/api/updateRedes',redesController.mntRedes);
//delete
router.put('/api/removeRedes',redesController.mntRedes);
//activate
router.put('/api/activateRedes',redesController.mntRedes);
//listar
router.get('/api/listarRedes/:opcion/:idprincipal/:estado',redesController.listarRedes);

module.exports=router;