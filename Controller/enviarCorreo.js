const nodemailer=require("nodemailer");
const config=require('../Conexion/configGeneral');
module.exports={
    enviarCorreo(req,res){
        try{
          let transporter=nodemailer.createTransport({
            service: config.service,
            host: config.host,
            port: config.puerto,
            security:false,
            auth: {
                user: config.gmailEnvio,
                pass: config.gmailPass
            },
            tls:{
                rejectUnauthorized:false
            }
          })

          let cuerpoCorreo="<p><b>Nombre Contacto</b>:"+req.body.nombre+"</p>"+
                          "<p><b>Gmail Contacto</b>:"+req.body.email+"</p>"+
                          "<p><b>Empresa Contacto</b>:"+req.body.empresa+"</p>"+
                          "<p><b>Decripción</b>:</p>"+
                          req.body.descripcion+"";


          var mailOptions = {
              from: config.gmailEnvio,
              to: config.gmail,
              subject: 'Contacto mediante WebSite(Portafolio)',
              html: cuerpoCorreo
          };
          
          transporter.sendMail(mailOptions, (error, info)=>{
              if (error) {
                throw error;
              } else {
                res.send('Email sent: ' + info.response);
              }
              res.send();
          });
        }catch(error){
          res.end(error);
          res.sen();
        }
    }
}