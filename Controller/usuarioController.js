const { response } = require('express');
var pool=require('../Conexion/ConexionBD');
module.exports={

    //Registrar Menu
    mntUsuario(req,res){
        try{
          const sql="call usp_mntUsuario(?,?,?,?,?,?,?,?,?)";
          if(req.body.opcion===6){
            req.body.password=req.body.contrasena;
          }
          console.log(req);
          var mntUsuario={
              idusuario:req.body.idusuario,
              usuario:req.body.usuario,
              password:req.body.password,
              nombre:req.body.nombre,
              apePaterno:req.body.apePaterno,
              apeMaterno:req.body.apeMaterno,
              opcion:req.body.opcion,
              estado:req.body.estado,
              passwordNew:req.body.passwordNew
          }
          console.log("aca");
          console.log(mntUsuario);
          pool.query(sql,[mntUsuario.opcion,mntUsuario.idusuario,mntUsuario.usuario,mntUsuario.password,mntUsuario.nombre,mntUsuario.apePaterno,mntUsuario.apeMaterno,mntUsuario.estado,mntUsuario.passwordNew],function(error,resp){
            console.log('respuesta');
            console.log(resp);
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
    listUsuario(req,res){
        try{
            const sql="call usp_mntUsuario(?,?,?,?,?,?,?,?,?)";
            var mntUsuario={
            idusuario:0,
            usuario:'',
            password:'',
            nombre:'',
            apePaterno:'',
            apeMaterno:'',
            opcion:req.params.opcion,
            estado:req.params.estado,
            passwordNew:req.body.passwordNew
        }
        pool.query(sql,[mntUsuario.opcion,mntUsuario.idusuario,mntUsuario.usuario,mntUsuario.password,mntUsuario.nombre,mntUsuario.apePaterno,mntUsuario.apeMaterno,mntUsuario.estado,mntUsuario.passwordNew],function(err,resp){
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
}