import Productos from '../models/productos.js'
import multer from 'multer'
import shortid from 'shortid';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurar almacenamiento de archivos
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const extension = file.mimetype.split('/')[1];
    cb(null, `${shortid.generate()}.${extension}`);
  }
});

// Configurar multer
const configuracionMulter = {
  storage: fileStorage,
  fileFilter(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Formato no válido. Solo se permiten JPG y PNG.'));
    }
  }
};

// Middleware para subir archivo (campo: 'img')
const upload = multer(configuracionMulter).single('img');

// Exportar función de middleware
export const subirArchivo = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      return res.status(400).json({ mensaje: error.message });
    }
    next();
  });
};





// AGREGAR PRODUCTOS

export const nuevoProducto = async(req, res, next)=>{
    const producto = new Productos(req.body);
    try {
        if(req.file.filename){
            producto.img= req.file.filename
        }
        await producto.save();
        res.json({mensaje: 'Se agrego un nuevo Producto'})
        
    } catch (error) {
        console.log(error);
        next();
    }
}


// Muestra todos los productos
export const verProductos = async(req, res, next)=>{
    try {
        const productos = await Productos.find({}); 
        res.json(productos)
    } catch (error) {
        console.log(error);
    }
}


export const verProducto = async(req,res,next)=>{
        const producto = await Productos.findById(req.params.idProducto);
        
        if(!producto){
            res.json({mensaje: 'Ese Producto no existe'})
            return next();
        }

        res.json(producto)
}


//Actualizar Producto

export const actualizarProducto = async(req,res,next)=>{
    try {


      let productoAnterior = await Productos.findById(
        req.params.idProducto);

        let nuevoProducto = req.body;

        if(req.file){
          nuevoProducto.img = req.file.filename;
        }else{
          nuevoProducto.img = productoAnterior.img;
        }

        let producto = await Productos.findOneAndUpdate({_id: req.params.idProducto},
            nuevoProducto,{ 
                new:true ,
            });
            res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}


// Eliminar productos  BY ID

export const eliminarProducto = async(req,res,next)=>{
  try {
    await Productos.findOneAndDelete({_id: req.params.idProducto});
    res.json({mensaje:'Producto eliminado Correctamente'});
  } catch (error) {
    console.log(error);
    next();
  }
}
