let express=require('express');
let app=express();
let path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//Verificación de fotos en el server
const staticRoute = path.join(__dirname, '../public/imagenes')
app.use('/sources', express.static(staticRoute))

//llamado del servidor
let server=require('../Conexion/configGeneral');

//llamado ruta
const menu=require('../Ruta/routeMenu');
const maestro=require('../Ruta/routeMaestro');
const skill=require('../Ruta/routeSkill');
const work=require('../Ruta/routeWork');
const foto=require('../Ruta/routeFoto');
const about=require('../Ruta/routeAbout');
const jobs=require('../Ruta/routeJobs');
const principal=require('../Ruta/routePrincipal');
const redes=require('../Ruta/routeRedes');
const email=require('../Ruta/routeEmail');
const descripcion=require('../Ruta/routeDescripcion');
const usuario=require('../Ruta/routeUsuario');
app.use(work);
app.use(menu);
app.use(maestro);
app.use(skill);
app.use(foto);
app.use(about);
app.use(jobs);
app.use(principal);
app.use(redes);
app.use(email);
app.use(descripcion);
app.use(usuario);

//creación del server
app.listen(server.servidor,function(error,res){
	if(error) throw error;
	else console.log("servidor corriendo perfectamente");
});
