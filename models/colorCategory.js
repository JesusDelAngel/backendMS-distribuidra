import mongoose from "mongoose";
import { text } from "stream/consumers";

const Schema = mongoose.Schema;

const colorCategory = new Schema({
    nameColorCategory:{
        type: String,
        trim:true,
        require: true
    }
})

export default mongoose.model('ColorCategory',colorCategory)