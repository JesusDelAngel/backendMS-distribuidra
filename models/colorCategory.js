import mongoose from "mongoose";


const Schema = mongoose.Schema;

const colorCategory = new Schema({
    nameColorCategory:{
        type: String,
        trim:true,
        required: true
    }
})

export default mongoose.model('ColorCategory',colorCategory)