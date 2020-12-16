var express=require('express');
var router=express.Router();
var maestroController=require('../Controller/maestroController');

//listar Maestro
router.get('/api/listMaestro/:opcion/:maestroId',maestroController.listarTablaMaestro);
//registrar Maestro
router.post('/api/addMaestro',maestroController.mntMaestro);
//update Maestro
router.put('/api/updateMaestro',maestroController.mntMaestro);
//remove Maestro
router.put('/api/removeMaestro',maestroController.mntMaestro);
//activar Maestro
router.put('/api/activa teMaestro',maestroController.mntMaestro);
module.exports=router;