var pool=require('../Conexion/ConexionBD');
module.exports={

    //Registrar Menu
    mntMenu(req,res){
        try{
          const sql="call usp_MntMenu(?,?,?,?,?,?)";
          var mntMenu={
              id:req.body.id,
              nombre:req.body.nombre,
              tipoMenu:req.body.tipoMenu,
              ruta:req.body.ruta,
              opcion:req.body.opcion,
              estado:req.body.estado
          }
          pool.query(sql,[mntMenu.opcion,mntMenu.id,mntMenu.nombre,mntMenu.tipoMenu,mntMenu.ruta,mntMenu.estado],error=>{
              if(error) throw error;
              else res.send('ok');
              res.end();
          })
        }catch(error){
          res.send(error);
          res.send()
        }
    },

    //listar Menu
    listMenu(req,res){
        try{
          const sql="call usp_MntMenu(?,?,?,?,?,?)";
        let mntMenu={
            id:null,
            nombre:'',
            tipoMenu:null,
            ruta:'',
            estado:req.params.estado,
            opcion:req.params.opcion
        }
        pool.query(sql,[mntMenu.opcion,mntMenu.id,mntMenu.nombre,mntMenu.tipoMenu,mntMenu.ruta,mntMenu.estado],function(err,resp){
            console.log(resp);
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

        //listar Maestro TipoMenu
    /*listTipoMenu(req,res){
        try{
          const sql="call usp_MntMenu(?,?,?,?,?,?)";
          let opcionId=0;
          if(req.params.opcionId!=undefined){
              opcionId=req.params.opcionId;
          }
          var mntMenu={
              idMenu:0,
              nombre:"",
              tipoMenu:0,
              ruta:"",
              estado:0,
              opcion:opcionId
          }
          pool.query(sql,[mntMenu.opcion,mntMenu.idMenu,mntMenu.nombre,mntMenu.tipoMenu,mntMenu.ruta,mntMenu.estado],function(err,resp){
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
    },*/
}