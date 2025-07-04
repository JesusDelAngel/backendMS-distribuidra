import express from "express"
import {nuevoCliente, verClientes, verCliente,actualizarCliente, eliminarCliente} from'../controllers/clienteController.js'
import {nuevoProducto, subirArchivo, verProductos,verProducto, actualizarProducto,eliminarProducto} from '../controllers/productosController.js'
import { nuevoPedido, verPedidos, verPedido, actualizarPedido, eliminarPedido } from '../controllers/pedidosControler.js'
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
// CRUD PRODUCTOS
router.post('/productos',
    subirArchivo,
    nuevoProducto);

router.get('/productos',verProductos);
router.get('/productos/:idProducto',verProducto);

router.put('/productos/:idProducto',
    subirArchivo,
    actualizarProducto)

router.delete('/productos/:idProducto', eliminarProducto)
    

//CRUD pedidos

router.post('/pedidos', nuevoPedido)
export default router

// Ver  todos los pedidos
router.get('/pedidos', verPedidos)

// Ver pedidos por ID
router.get('/pedidos/:idPedido',verPedido)

router.put('/pedido/:idPedido',actualizarPedido)

router.delete('/pedido/:idPedido', eliminarPedido)