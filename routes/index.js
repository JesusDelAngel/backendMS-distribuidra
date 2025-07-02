import express from "express"
import {nuevoCliente, verClientes, verCliente,actualizarCliente, eliminarCliente} from'../controllers/clienteController.js'
import {nuevoProducto, verProductos} from '../controllers/productosController.js'

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

// CRUD PRODUCTOS
router.post('/productos',nuevoProducto);

router.get('/productos',verProductos);

export default router
