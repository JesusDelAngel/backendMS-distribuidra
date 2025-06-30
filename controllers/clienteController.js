import Clientes from '../models/Clientes.js'

export const nuevoCliente = async (req, res) => {
    const cliente = new Clientes(req.body);
    try {
        // almacenar el registro, 
        await cliente.save();
        res.json({ mensaje: 'Se agrego un nuevo cliente' });

    } catch (error) {
        // si hay error imprimirlo en console.log
    }
    // console.log(req.body);
    // res.json({ recibido: req.body });
};


export const verClientes = async (req, res, next) => {
    try {
        // ver registro, 
        const clientes = await Clientes.find({});
        res.json(clientes)
    } catch (error) {
        console()
    }
}


export const verCliente = async (req, res, next) => {
    // ver registro, 
    const cliente = await Clientes.findById(req.params.idCliente);

    if (!cliente) {
        res.json({ mensaje: 'El cliente no existe ' })
        next();
    }
    // else if(cliente == req.params.idCliente){
    //     res.json({ mensaje: 'Ya hay un cliente registrado con los mismos datos'})
    //     next();
    // }
    // Mostrar el cliente
    res.json(cliente)
}

//Actualiza un cliente por su Id 

export const actualizarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findByIdAndUpdate({ _id: req.params.idCliente },
            req.body, {
            new: true
        });
        res.json(cliente);
    } catch (error) {
        console.log(error);
        next();
    }
}


export const eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findOneAndDelete({_id : req.params.idCliente});
        // Mostrar mensaje
        if (!cliente) {
            res.json({ mensaje: 'El cliente no existe ' })
            next();
        }
        res.json({ mensaje: 'Cliente eliminado' })

    } catch (error) {
    console.log(error)
    next();
    }

}



// manera de definirse cuando se usa commonJS
// exports.nuevoCliente= async(req, res)=>{
//     console.log(req.body);
// }

