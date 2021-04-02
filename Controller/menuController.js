var pool=require('../Conexion/ConexionBD');
module.exports={

    //Registrar Menu
    mntMenu(req,res){
        try{
          const sql="call usp_MntMenu(?,?;?;?,?,?,?)";
          var mntMenu={
              idMenu:req.body.idMenu,
              idMenuPertenencia:req.body.idMenuPertenencia,
              nombre:req.body.nombre,
              tipoMenu:req.body.tipoMenu,
              ruta:req.body.ruta,
              estado:req.body.estado,
              opcion:req.body.opcion
          }
          pool.query(sql,[mntMenu.idMenu,mntMenu.idMenuPertenencia,mntMenu.nombre,mntMenu.tipoMenu,mntMenu.ruta,mntMenu.estado,mntMenu.opcion],error=>{
              if(error) throw error;
              else res.send('ok');
              res.end();
          })
        }catch(error){
          res.send(error);
          res.send()
        }
    },

    //listar Maestro TipoMenu
    listTipoMenu(req,res){
        try{
          const sql="call usp_MntMenu(?,?,?,?,?,?,?)";
          let opcionId=0;
          if(req.params.opcionId!=undefined){
              opcionId=req.params.opcionId;
          }
          var mntMenu={
              idMenu:0,
              idMenuPertenencia:0,
              nombre:"",
              tipoMenu:0,
              ruta:"",
              estado:0,
              opcion:opcionId
          }
          pool.query(sql,[mntMenu.opcion,mntMenu.idMenu,mntMenu.idMenuPertenencia,mntMenu.nombre,mntMenu.tipoMenu,mntMenu.ruta,mntMenu.estado],function(err,resp){
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
    },

    //listar Menu
    listMenu(req,res){
        try{
          const sql="call usp_MntMenu(?,?,?,?,?,?,?)";
        console.log(res);
        console.log(req.params);
        var mntMenu={
            idMenu:0,
            idMenuPertenencia:0,
            nombre:"",
            tipoMenu:0,
            ruta:"",
            estado:req.params.estado,
            opcion:req.params.opcionId
        }
        pool.query(sql,[mntMenu.opcion,mntMenu.idMenu,mntMenu.idMenuPertenencia,mntMenu.nombre,mntMenu.tipoMenu,mntMenu.ruta,mntMenu.estado],function(err,resp){
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
          res.end()
        }
    }
}