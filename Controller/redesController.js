const pool=require('../Conexion/ConexionBD');
module.exports={
    mntRedes(req,res){
        try{
            const sql="call usp_mntRedes(?,?,?,?,?,?,?,?)";
            let objRedes={
                opcion:req.body.opcion,
                idredes:req.body.idredes,
                titulo:req.body.titulo,
                clases:req.body.clases,
                ruta:req.body.ruta,
                style:req.body.style,
                idprincipal:req.body.idprincipal,
                estado:req.body.estado
            }
            pool.query(sql,[objRedes.idredes,objRedes.titulo,objRedes.clases,objRedes.ruta,objRedes.style,objRedes.idprincipal,objRedes.estado,objRedes.opcion],(error)=>{
                if(error) throw error;
                else res.send('ok');
                res.send();
            })
        }catch(error){
            res.send(error);
            res.end();
        }
    },
    listarRedes(req,res){
        try{
            const sql="call usp_mntRedes(?,?,?,?,?,?,?,?)";
            let objRedes={
                opcion:req.params.opcion,
                idredes:null,
                titulo:null,
                clases:null,
                ruta:null,
                style:null,
                idprincipal:req.params.idprincipal,
                estado:req.params.estado
            }
            pool.query(sql,[objRedes.idredes,objRedes.titulo,objRedes.clases,objRedes.ruta,objRedes.style,objRedes.idprincipal,objRedes.estado,objRedes.opcion],function(err,resp){
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
        }catch(error){
            res.send(error);
            res.end();
        }
    }
}