import Marcas from '../models/Marca.js'

import multer from 'multer'
import shortid from 'shortid';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import productos from '../models/productos.js';

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

// Middleware para subir archivo (campo: 'imgMarca')
const upload = multer(configuracionMulter).single('imgMarca');

// Exportar función de middleware
export const subirArchivoMarca = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      return res.status(400).json({ mensaje: error.message });
    }
    console.log(error);
    next();
  });
};



//Nueva Marca

export const nuevaMarca = async (req, res, next) => {
  const marca = new Marcas(req.body);
  try {
    if (req.file.filename) {
      marca.imgMarca = req.file.filename
    }
    await marca.save();
    res.json({ mensaje: 'Se agrego una marca nueva' })
  } catch (error) {
    console.log(error)
    next();
  }
}


//Get marcas 

export const verMarcas = async (req, res, next) => {
  try {
    const marcas = await Marcas.find();
    res.json(marcas)
  } catch (error) {
    console.log(error);
    next();
  }
}


export const verMarca = async (req, res, next) => {
  const marca = await Marcas.findById(req.params.idMarca);
  if (!marca) {
    res.json({ mensaje: 'La Marca no esta registrada' })
    return next();
  }
  res.json(marca)

}

export const actualizarMarca = async (req, res, next) => {
  try {
    let marcaAnterior = await Marcas.findById(req.params.idMarca)
    let nuevaMarca = req.body;
    if (req.file) {
      nuevaMarca.imgMarca = req.file.filename;
    }else{
      nuevaMarca.imgMarca = marcaAnterior.imgMarca
    }

    let marca = await Marcas.findOneAndUpdate({ _id: req.params.idMarca },
      nuevaMarca, {
         new: true,
    });
    res.json(marca)
  } catch (error) {
    console.log(error);
    next();
  }
}


export const eliminarMarca = async(req, res, next) => {
  try {
    await Marcas.findOneAndDelete({_id: req.params.idMarca})
    res.json({mensaje: 'Marca eliminada correctamente'})
  } catch (error) {
    console.log(error);
    next();
  }
}