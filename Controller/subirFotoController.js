var fs = require('fs');
const routeImagenServer=require('../Conexion/configGeneral');   

module.exports={
  //Subir fotos
  subirFoto(req, res, next) {
    try{
      const files = req.file
      if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
      }if (files)  {
        res.send('ok');
        res.end();
      }
    }catch(error){
      res.send(error);
      res.end();
    }
  },
  //obtener foto
  obtenerFotos(req, res, next) {
    try{
      fs.readdir('../archivo/foto', function(err, files) {
        res.send(files);
        res.end();        
      });
    }catch(error){
      res.send(error);
      res.end();
    }
  }
}  