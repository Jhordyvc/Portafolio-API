var express=require('express');
var router=express.Router();
var descripcionController=require('../Controller/descripcionController');

//registrar
router.post('/api/addDescripcion',descripcionController.mntDescripcion);
//update
router.put('/api/updateDescripcion',descripcionController.mntDescripcion);
//delete
router.put('/api/removeDescripcion',descripcionController.mntDescripcion);
//activate
router.put('/api/activateDescripcion',descripcionController.mntDescripcion);
//listar
router.get('/api/listarDescripcion/:opcion/:estado',descripcionController.listarDescripcion);

module.exports=router;