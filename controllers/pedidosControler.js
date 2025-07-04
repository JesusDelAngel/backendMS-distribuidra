import { close } from "fs";
import Pedidos from "../models/Pedidos.js"
export const nuevoPedido = async (req, res, next)=>{
    const pedido = new Pedidos(req.body);
    try {
        await pedido.save();
        res.json({mensaje:'Pedido registrado correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra todos los pedidos
export const verPedidos = async(req, res, next)=>{
    try {
        // populate para ver los datos 
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model:'Productos'
        });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
}

// MOSTRAR PEDIDOS POR ID
export const verPedido = async(req,res,next)=>{
        const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
            path: 'pedido.producto',
            model:'Productos'
        });
        if(!pedido){
            res.json({mensaje: 'Pedido no registrado'});
            next();
        }
        res.json(pedido);
}

export const actualizarPedido = async(req,res,next)=>{
    try {
        let pedido = await Pedidos.findOneAndUpdate({_id: req.params.idPedido},req.body,{
            new : true
        }).populate('cliente').populate({
            path: 'pedido.producto',
            model:'Productos'
        });
        res.json(pedido);
    } catch (error) {
        console.log(error)
        next();
    }
}

export const eliminarPedido = async(req, res, next) =>{
    try {
       await Pedidos.findOneAndDelete({_id:req.params.idPedido})
    } catch (error) {
        close.log(error)
        next();
    }

    res.json({mensaje:'Pedido eliminado correctamente'})
}