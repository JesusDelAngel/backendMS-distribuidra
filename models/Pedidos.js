import mongoose from "mongoose";
import { type } from "os";
import { ref } from "process";
import Productos from "./productos.js";
import Clientes from "./Clientes.js";
const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: Clientes
        // Manera de hacer referencia a la tabla de clientes
    },
    pedido: [{
        producto: {
            type: Schema.ObjectId,
            ref: Productos
        },
        cantidad: Number
    }],
    total:{
        type: Number
    }
})

export default mongoose.model('Pedidos',pedidosSchema);