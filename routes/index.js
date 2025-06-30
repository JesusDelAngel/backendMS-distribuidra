import express from "express"
import {nuevoCliente, verClientes, verCliente,actualizarCliente, eliminarCliente} from'../controllers/clienteController.js'

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

export default router
