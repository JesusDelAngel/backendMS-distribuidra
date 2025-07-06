import mongoose from "mongoose";

const Schema = mongoose.Schema;

const marcaSchema = new Schema({
    nameMarca:{
        type:String,
        trim: true,
    },
    imgMarca:{
        type: String,
        trim:true
    },
    descriptionMarca:{
        type: String,
        trim:true
    }
})

export default mongoose.model('Marcas',marcaSchema)