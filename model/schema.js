import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    profilepic:{
        type:String,
    },
    displayname:{
        type:String,
        required:true
    },
    customurl:{
        type:String,
    },
    bio:{
        type:String,
    },
    facebook:{
        type:String,
    },
    twitter:{
        type:String,
    },
    linkedin:{
        type:String,
    }
})

module.exports = mongoose.models.User || mongoose.model('User',userSchema)