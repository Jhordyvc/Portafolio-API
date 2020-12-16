const pool = require("../Conexion/ConexionBD");

module.exports={

    listarTablaMaestro(req,res){
        const sql="call usp_mntMaestro(?,?,?,?,?,?)";
        console.log(req);
        var opcion=0;
        if(req.params.opcion!=undefined){
          opcion=req.params.opcion;
        }
        pool.query(sql,[opcion,req.params.maestroId,null,null,0,0],function(err,resp){
            if(err){
              throw err;
            }
            if(resp.length>0){
              res.send(resp);
            }else{
              res.send('not result');
            }
            res.end();
        })
    },
    mntMaestro(req,res){
      const sql="call usp_mntMaestro(?,?,?,?,?,?)";
      console.log(res);
      let mntMaestro={
        opcion:req.body.opcion,
        idMaestro:req.body.idMaestro,
        nombreMaestro:req.body.nombreMaestro,
        desMaestro:req.body.desMaestro,
        maestroItem:req.body.maestroItem,
        estado:req.body.estado
      }
      pool.query(sql,[mntMaestro.opcion,mntMaestro.idMaestro,mntMaestro.nombreMaestro,mntMaestro.desMaestro,mntMaestro.maestroItem,mntMaestro.estado],(error)=>{
        if(error) throw error;
        else res.send('ok');
        res.send();
      })
    }
}