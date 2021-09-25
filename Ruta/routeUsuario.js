var express=require('express');
var router=express.Router();
var usuarioController=require('../Controller/usuarioController');

//registrar
router.post('/api/addUsuario',usuarioController.mntUsuario);
//update
router.put('/api/updateUsuario',usuarioController.mntUsuario);
//update
router.put('/api/removeUsuario',usuarioController.mntUsuario);
//activate
router.put('/api/activateUsuario',usuarioController.mntUsuario);
//activate
router.put('/api/updateContrasena',usuarioController.mntUsuario);
//listar
router.get('/api/listarUsuario/:opcion/:estado',usuarioController.listUsuario);

module.exports=router;