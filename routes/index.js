import express from "express"
import {nuevoCliente, verClientes, verCliente,actualizarCliente, eliminarCliente} from'../controllers/clienteController.js'
import {nuevoProducto, subirArchivo, verProductos,verProducto, actualizarProducto,eliminarProducto, verProductosFantasia,verProductosPermanentes} from '../controllers/productosController.js'
import { nuevoPedido, verPedidos, verPedido, actualizarPedido, eliminarPedido } from '../controllers/pedidosControler.js'
import{ nuevaMarca, subirArchivoMarca, verMarcas, verMarca,actualizarMarca,eliminarMarca}from "../controllers/marcaController.js"
import{ nuevoColorCategory,verColorsCategory, verColorCategory, actualizarColorCategory, eliminarColorCategory} from '../controllers/colorCategoryController.js'
import { nuevoTypeColorCategory, verTypeColorCategory } from "../controllers/TypeColorController.js"
// import Productos from "../models/productos.js"
// import Marca from "../models/Marca.js"
// CRUD CLIENTES
const router = express.Router();
// Agregar un cliente 
router.post('/clientes',nuevoCliente);
// Ver un cliente 
router.get('/clientes',verClientes);
// Obtener un cliente en especifico
router.get('/clientes/:idCliente',verCliente);
// Actualizar cliente 
router.put('/clientes/:idCliente',actualizarCliente);
// Eliminar cliente 
router.delete('/clientes/:idCliente',eliminarCliente);

//###############################################
// CRUD MARCAS
router.post('/marcas', 
    subirArchivoMarca,
    nuevaMarca);


router.get('/marcas',verMarcas);
router.get('/marca/:idMarca',verMarca);
router.put('/marca/:idMarca',
    subirArchivoMarca,
    actualizarMarca);

router.delete('/marca/:idMarca', eliminarMarca);


//###############################################
//CRUD COLOR CATEGORIES

router.post('/colorCategory',nuevoColorCategory);
router.get('/colorCategory',verColorsCategory);
router.get('/colorCategory/:idColorCategory',verColorCategory);
router.put('/colorCategory/:idColorCategory', actualizarColorCategory)
router.delete('/colorCategory/:idColorCategory', eliminarColorCategory);

//###############################################
// CRUD PRODUCTOS
router.post('/productos',
    subirArchivo,
    nuevoProducto);
// Obtener todos los productos
router.get('/productos',verProductos);
// Obtener un producto
// Obtener Productos por  Categoria De Color Tintes Fantasia 
router.get('/productos/fantasia', verProductosFantasia)
router.get('/productos/permanentes', verProductosPermanentes)


// Obtener Productos por Marca
router.get('/productos/:idProducto',verProducto);


// Actualizar un producto
router.put('/productos/:idProducto',
    subirArchivo,
    actualizarProducto);
// Eliminar un Producto
router.delete('/productos/:idProducto', eliminarProducto)
    

//CRUD pedidos
// Agregar un nuevo Pedido
router.post('/pedidos', nuevoPedido)
// Ver  todos los pedidos
router.get('/pedidos', verPedidos)
// Ver pedidos por ID
router.get('/pedidos/:idPedido',verPedido)
// Actualizar pedido
router.put('/pedido/:idPedido',actualizarPedido)
// Eliminar un pedido 
router.delete('/pedido/:idPedido', eliminarPedido)

// Crud TypeColor Rojo , cobrizo, naturales Nacarados etc

router.post('/TypeColors', nuevoTypeColorCategory)
router.get('/TypeColors/', verTypeColorCategory)



export default router