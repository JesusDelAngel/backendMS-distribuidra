import mongoose from "mongoose";
// import { type } from "os";
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    brandProduct: {
        type:String,
        trim: true,
    },
    nameProduct: {
        type: String,
        trim: true,
        required: true 
    },
    descriptionProduct:{
        type: String,
        trim: true
    },
    availableParts:{
        type: Number,
        required: true 
    },
    price:{
        type:Number,
        required: true  // Supongamos que el precio sí es obligatorio
    },
    img:{
        type: String,
        trim:true
    },
    numerology:{
        type: Number
    }

});

export default  mongoose.model('Productos',productosSchema)