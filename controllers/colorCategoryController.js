import ColorCategory from "../models/colorCategory.js"


//Agregar categoria
export const nuevoColorCategory = async(req, res, next)=>{
    const colorCategory = new ColorCategory(req.body);
    try {
        await colorCategory.save();
        res.json({mensaje:'Se agrego una nueva categoria de color'})

    } catch (error) {
        console.log(error)
    }
}

//Obtener categorias 

export const verColorsCategory = async(req,res,next)=>{
    try {
        const colorCategory = await ColorCategory.find({});
        res.json(colorCategory);
        
    } catch (error) {
        console.log(error)
    }
}

// obtener categoria por id
export const verColorCategory = async(req, res, next) => {
        const colorCategory = await ColorCategory.findById(req.params.idColorCategory)
                
        if(!colorCategory){
            res.json({mensaje: 'Esa caategoria de color no existe'})
            return next();
        }

        res.json(colorCategory)
}


export const actualizarColorCategory = async(req,res, next)=>{
    try {
        let colorCategory = await ColorCategory.findOneAndUpdate({_id: req.params.idColorCategory},req.body,{
            new: true
        })
        res.json(colorCategory);
        
    } catch (error) {
        console.log(error);
        next();
    }
}



export const eliminarColorCategory =async(req,res,next)=>{
    try {
        await ColorCategory.findOneAndDelete({_id: req.params.idColorCategory});
        res.json({mensaje: 'Categoria de Color eliminada correctamente'})
    } catch (error) {
        console.log(error)
    }
}