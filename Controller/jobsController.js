const pool=require('../Conexion/ConexionBD');
module.exports={
    mntJobs(req,res){
        try{
            const sql="call usp_mntTrabajos(?,?,?,?,?,?)";
            let objJobs={
                opcion:req.body.opcion,
                idtrabajos:req.body.idtrabajos,
                titulo:req.body.titulo,
                descripcion:req.body.descripcion,
                foto:req.body.foto,
                estado:req.body.estado
            }
            pool.query(sql,[objJobs.idtrabajos,objJobs.titulo,objJobs.descripcion,objJobs.foto,objJobs.estado,objJobs.opcion],(error)=>{
                if(error) throw error;
                else res.send('ok');
                res.end();
            })
        }catch(error){
            res.send(error);
            res.end();
        }
    },
    listarJobs(req,res){
        try{
            const sql="call usp_mntTrabajos(?,?,?,?,?,?)";
            let objJobs={
                opcion:req.params.opcion,
                idtrabajo:0,
                titulo:null,
                descripcion:null,
                foto:null,
                estado:req.params.estado
            }
            pool.query(sql,[objJobs.idtrabajo,objJobs.titulo,objJobs.descripcion,objJobs.foto,objJobs.estado,objJobs.opcion],function(err,resp){
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