import mongoose from "mongoose";
// import { type } from "os";
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    // brandProduct: {
    //     type:String,
    //     trim: true,
    // },
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
        required: true,
        min: [0, 'La cantidad disponible no puede ser negativa']
    },
    price:{
        type:Number,
        required: true, // Supongamos que el precio sí es obligatorio
        min:[0.01,'El precio debe ser mayor a 0']
    },
    img:{
        type: String,
        trim:true
    },
    numerology:{
        type: Number
    },

    marca:{ type: mongoose.Schema.Types.ObjectId, ref: 'Marcas', required: true},
    ColorCategory:{ type: mongoose.Schema.Types.ObjectId, ref: 'ColorCategory'},// , required: true
    typeColor:{ type: mongoose.Schema.Types.ObjectId, ref: 'TypeColor'}// , required: true

});

export default  mongoose.model('Productos',productosSchema)