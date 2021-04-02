var express=require('express');
var router=express.Router();
const multer = require('multer');
const routeImagenServer=require('../Conexion/configGeneral');   
const uploadFoto=require('../Controller/subirFotoController');
var fs = require('fs');

storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, routeImagenServer.routeImagen) // Agregamos el directorio donde se guardarán los archivos.
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Le pasamos el nombre original del archivo, también podriamos cambiar el nombre concatenando la fecha actual.
    }
  }),
   upload = multer({storage});

//subir foto
router.post('/api/subirFoto',upload.single('archivo'),uploadFoto.subirFoto);
//obtener foto
router.get('/api/verFotos',function(req, res, next) {
    fs.readdir('../public/imagenes', function(err, files) {
      console.log(files);
       res.send(files);        
    });
    debugger
    var data = fs.readFileSync('../public/imagenes/cibertec.jpg')
    var base64=new Buffer(data).toString("base64")
    console.log(base64);
});

module.exports=router;

