import express from "express"
import routes from './routes/index.js'
import mongoose from'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors';

// Conectar mongo
//Conectar a mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DistribuidoraAPI',{
    // useNewUrlParser:true
});
// crear el servidor
const app = express();
app.use(cors()); // Esto habilita CORS para todas las rutas

//Habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// Routing // get obtiene una ruta en especifico, USE trata de acceder a  todas las rutas que inicien con /
app.use('/',routes)// app.use('/',usuarioRoutes)

//Carpeta Publica
app.use(express.static('uploads'));
//Definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});