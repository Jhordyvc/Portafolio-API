
const pool=require('../Conexion/ConexionBD');
module.exports={
    mntAbout(req,res){
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
    },
    listarAbout(req,res){
        const sql="call usp_mntAbout(?,?,?,?,?)";
        console.log(req);
        let objAbout={
            opcion:req.params.opcion
        }
        console.log(objSkill);
        pool.query(sql,[objAbout.opcion,0,'','',0],(error,resp)=>{
            if(error) throw error;
            if(resp.length>0){
                res.send(resp);
              }else{
                res.send('not result');
              } 
            res.end();
        })
    }
}