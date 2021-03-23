var express=require('express');
var router=express.Router();
var sendCorreo=require('../Controller/enviarCorreo');

//enviar correo
router.post('/api/sendEmail',sendCorreo.enviarCorreo);

module.exports=router;