const pool=require('../Conexion/ConexionBD');
module.exports={
    mntAbout(req,res){
        try{
            const sql="call usp_mntAbout(?,?,?,?,?)";
            let objAbout={
                opcion:req.body.opcion,
                idAbout:req.body.idAbout,
                descripcion:req.body.descripcion,
                foto:req.body.foto,
                estado:req.body.estado
            }
            pool.query(sql,[objAbout.opcion,objAbout.idAbout,objAbout.descripcion,objAbout.foto,objAbout.estado],(error)=>{
                if(error) throw error;
                else res.send('ok');
                res.end();
            })
        }catch(error){
            res.send(error);
            res.end();
        }
    },
    listarAbout(req,res){
        try{
            const sql="call usp_mntAbout(?,?,?,?,?)";
            let objAbout={
                opcion:req.params.opcion,
                estado:req.params.estado
            }
            pool.query(sql,[objAbout.opcion,0,'','',objAbout.estado],(error,resp)=>{
                if(error) throw error;
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