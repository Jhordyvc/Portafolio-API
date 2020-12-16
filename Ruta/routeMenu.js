var express=require('express');
var router=express.Router();
var menuController=require('../Controller/menuController');

//registrar menu
router.post('/api/addMenu',menuController.mntMenu);
//lista Maestro TipoMenu
router.get('/api/listTipoMenu/:opcionId',menuController.listTipoMenu);
//litsar Menu
router.get('/api/listMenu/:opcionId/:estado',menuController.listMenu);

module.exports=router;