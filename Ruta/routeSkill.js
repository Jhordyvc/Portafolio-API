var express=require('express');
var router=express.Router();
var skillController=require('../Controller/skillController');

//registrar
router.post('/api/addSkill',skillController.mntSkill);
//update
router.put('/api/updateSkill',skillController.mntSkill);
//update
router.put('/api/removeSkill',skillController.mntSkill);
//activate
router.put('/api/activateSkill',skillController.mntSkill);
//listar
router.get('/api/listarSkill/:opcion/:estado',skillController.listarSkill);

module.exports=router;