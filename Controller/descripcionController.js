const pool=require('../Conexion/ConexionBD');
module.exports={
    mntDescripcion(req,res){
        try{
            const sql="call usp_mntDescripcionType(?,?,?,?,?)";
            let objDescripcion={
                opcion:req.body.opcion,
                iddescripcion:req.body.iddescripcion,
                idprincipal:req.body.idprincipal,
                nombre:req.body.nombre,
                estado:req.body.estado
            }
            pool.query(sql,[objDescripcion.opcion,objDescripcion.iddescripcion,objDescripcion.idprincipal,objDescripcion.nombre,objDescripcion.estado],(error)=>{
                if(error) throw error;
                else res.send('ok');
                res.send();
            })
        }catch(error){
            console.log(error);
            res.send(error);
            res.end();
        }
    },
    listarDescripcion(req,res){
        try{
            const sql="call usp_mntDescripcionType(?,?,?,?,?)";
            let objDescripcion={
                opcion:req.params.opcion,
                iddescripcion:null,
                idprincipal:null,
                nombre:null,
                estado:req.params.estado
            }
            pool.query(sql,[objDescripcion.opcion,objDescripcion.iddescripcion,objDescripcion.idprincipal,objDescripcion.nombre,objDescripcion.estado],function(err,resp){
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