var express=require('express');
var router=express.Router();
const multer = require('multer');
const routeImagenServer=require('../Conexion/configGeneral');   
const uploadFoto=require('../Controller/subirFotoController');

storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, routeImagenServer.imagen) // Agregamos el directorio donde se guardarán los archivos.
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Le pasamos el nombre original del archivo, también podriamos cambiar el nombre concatenando la fecha actual.
    }
  }),
   upload = multer({storage});

//subir foto
router.post('/api/subirFoto',upload.single('archivo'),uploadFoto.subirFoto);
//obtener foto
router.get('/api/verFotos',uploadFoto.obtenerFotos);

module.exports=router;

