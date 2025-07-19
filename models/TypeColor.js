import mongoose from "mongoose";
// import { type } from "os";

const Schema = mongoose.Schema;

const typeColorSchema = new Schema({
    nameTypeCategory:{
        type: String,
        trim: true
    }
    // ,
    // description:{
    //     descriptionTypeCategory:{
    //         type: String,
    //         trim: true
    //     }
    // }
});

export default mongoose.model('TypeColor',typeColorSchema)

