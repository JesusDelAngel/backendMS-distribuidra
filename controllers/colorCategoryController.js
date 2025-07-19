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

export const verColorCategory = async(req,res,next)=>{
    try {
        const colorCategory = await ColorCategory.find({});
        res.json(colorCategory);
        
    } catch (error) {
        console.log(error)
    }
}