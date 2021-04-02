const pool=require('../Conexion/ConexionBD');
module.exports={
    mntSkill(req,res){
       try{
        const sql="call usp_mntSkill(?,?,?,?,?,?,?)";
        let objSkill={
            opcion:req.body.opcion,
            idSkill:req.body.idSkill,
            nombre:req.body.nombre,
            imgSkill:req.body.imgSkill,
            colorImg:req.body.colorImg,
            tipoSkill:req.body.tipoSkill,
            estado:req.body.estado
        }
        pool.query(sql,[objSkill.opcion,objSkill.idSkill,objSkill.nombre,objSkill.imgSkill,objSkill.colorImg,objSkill.tipoSkill,objSkill.estado],(error)=>{
            if(error) throw error;
            else res.send('ok');
            res.end();
        })
       }catch(error){
           res.send(error);
           res.end();
       }
    },
    listarSkill(req,res){
        try{
            const sql="call usp_mntSkill(?,?,?,?,?,?,?)";
            let objSkill={
                opcion:req.params.opcion,
                estado:req.params.estado
            }
            pool.query(sql,[objSkill.opcion,0,'','','',0,objSkill.estado],(error,resp)=>{
                if(error) throw error;
                if(resp.length>0){
                    res.send(resp);
                }else{
                    res.send('not result');
                } 
                res.end();
            })
        }catch(error){
            res.send(error)
            res.end();
        }
    }
}