const pool=require('../Conexion/ConexionBD');
module.exports={
    mntPrincipal(req,res){
        const sql="call usp_principal(?,?,?,?,?,?)";
        let objPrincipal={
            opcion:req.body.opcion,
            idprincipal:req.body.idprincipal,
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            foto:req.body.foto,
            estado:req.body.estado
        }
        pool.query(sql,[objPrincipal.idprincipal,objPrincipal.nombre,objPrincipal.descripcion,objPrincipal.foto,objPrincipal.estado,objPrincipal.opcion],(error)=>{
            if(error) throw error;
            else res.send('ok');
            res.send();
        })
    },
    listarPrincipal(req,res){
        const sql="call usp_principal(?,?,?,?,?,?)";
        let objPrincipal={
            opcion:req.params.opcion,
            idprincipal:0,
            nombre:null,
            descripcion:null,
            foto:null,
            estado:req.params.estado
        }
        pool.query(sql,[objPrincipal.idtrabajo,objPrincipal.titulo,objPrincipal.descripcion,objPrincipal.foto,objPrincipal.estado,objPrincipal.opcion],function(err,resp){
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
    }
}