var express=require('express');
var router=express.Router();
var jobsController=require('../Controller/jobsController');

//registrar
router.post('/api/addJobs',jobsController.mntJobs);
//update
router.put('/api/updateJobs',jobsController.mntJobs);
//delete
router.put('/api/removeJobs',jobsController.mntJobs);
//activate
router.put('/api/activateJobs',jobsController.mntJobs);
//listar
router.get('/api/listarJobs/:opcion/:estado',jobsController.listarJobs);

module.exports=router;