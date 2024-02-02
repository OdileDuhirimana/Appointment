const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is required"]
    },
    email:{
        type:String,
        require: [true, "Email is required"]
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    }
})

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;