var express=require('express');
var router=express.Router();
var menuController=require('../Controller/menuController');

//registrar menu
router.post('/api/addMenu',menuController.mntMenu);
//actualizar Menu
router.put('/api/updateMenu',menuController.mntMenu);
//remove Menu
router.put('/api/removeMenu',menuController.mntMenu);
//activate Menu
router.put('/api/activateMenu',menuController.mntMenu);
//lista Maestro TipoMenu
//router.get('/api/listTipoMenu/:opcionId',menuController.listTipoMenu);
//litsar Menu
router.get('/api/listarMenu/:opcion/:estado',menuController.listMenu);

module.exports=router;