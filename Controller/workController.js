const pool=require('../Conexion/ConexionBD');
module.exports={
    mntWork(req,res){
        try{
            const sql="call usp_mntWork(?,?,?,?,?,?,?,?)";
            let objWork={
                opcion:req.body.opcion,
                idWork:req.body.idWork,
                nombre:req.body.nombre,
                estudio:req.body.estudio,
                fechaInicio:req.body.fechaInicio,
                fechaFin:req.body.fechaFin,
                imagen:req.body.imagen,
                estado:req.body.estado
            }
            pool.query(sql,[objWork.opcion,objWork.idWork,objWork.nombre,objWork.estudio,objWork.fechaInicio,objWork.fechaFin,objWork.imagen,objWork.estado],(error)=>{
                if(error) throw error;
                else res.send('ok');
                res.send();
            })
        }catch(error){
            res.send(error);
            res.end();
        }
    },
    listarWork(req,res){
        try{
            const sql="call usp_mntWork(?,?,?,?,?,?,?,?)";
            let objWork={
                opcion:req.params.opcion,
                idWork:0,
                nombre:null,
                estudio:null,
                fechaInicio:null,
                fechaFin:null,
                imagen:null,
                estado:req.params.estado
            }
            pool.query(sql,[objWork.opcion,objWork.idWork,objWork.nombre,objWork.estudio,objWork.fechaInicio,objWork.fechaFin,objWork.imagen,objWork.estado],function(err,resp){
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