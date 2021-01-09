var express=require('express');
var router=express.Router();
var aboutController=require('../Controller/AboutController');

//registrar
router.post('/api/addAbout',aboutController.mntAbout);
//update
router.put('/api/updateAbout',aboutController.mntAbout);
//delete
router.put('/api/removeAbout',aboutController.mntAbout);
//activate
router.put('/api/activateAbout',aboutController.mntAbout);
//listar
router.get('/api/listarAbout/:opcion',aboutController.listarAbout);


module.exports=router;