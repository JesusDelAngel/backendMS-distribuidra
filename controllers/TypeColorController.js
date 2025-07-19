import TypeColor from "../models/TypeColor.js"

// Colores: naturales irisados Rojos
export const nuevoTypeColorCategory = async(req, res, next)=>{
    const typeColor = new TypeColor(req.body);
    try {
        await typeColor.save();
        res.json({mensaje:'Se agrego un nuevo tipo de tinte'})
        
    } catch (error) {
        console.log(error);
        next();
    }
}


export const verTypeColorCategory = async(req,res,next)=>{
    try {
        const typeColors = await TypeColor.find({});
        res.json(typeColors)
    } catch (error) {
        console.log(error);
        next();
    }
}