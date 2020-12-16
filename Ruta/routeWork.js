var express=require('express');
var router=express.Router();
var workController=require('../Controller/workController');

//registrar
router.post('/api/addWork',workController.mntWork);
//actualizar
router.put('/api/updateWork',workController.mntWork);
//eliminar
router.put('/api/deleteWork',workController.mntWork);
//activar
router.put('/api/activateWork',workController.mntWork);
//listar
router.get('/api/listWork/:opcion/:estado',workController.listarWork);

module.exports=router;