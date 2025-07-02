import productos from '../models/productos.js';
import Productos from '../models/productos.js'

export const nuevoProducto = async(req, res, next)=>{
    const producto = new Productos(req.body);
    try {
        await producto.save();
        res.json({mensaje: 'Se agrego un nuevo Producto'})
        
    } catch (error) {
        console.log(error);
        next();
    }
}

export const verProductos = async(req, res, next)=>{
    try {
        const productos = await Productos.find({}); 
        res.json(productos)
    } catch (error) {
        console.log(error);
    }
}