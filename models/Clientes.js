// const mongose = require('mongoose');
import mongoose from 'mongoose';
// const { type } = require('os');
const Schema = mongoose.Schema;

const clientesSchema = new Schema({
    nombre:{
        type: String,
        trim: true
    },
    apellido:{
        type: String,
        trim: true
    },
    email: {
        type:String,
        unique: true,
        loweercase: true,
        trim:true
    },
    telefono: {
        type: String,
        trim:true
    }
});
// manera de  exportar cunado se usa ES Module
export default mongoose.model('Clientes', clientesSchema);
// manera de definirse en CommonJS
// module.exports = mongose.model('Clientes',clientesSchema)