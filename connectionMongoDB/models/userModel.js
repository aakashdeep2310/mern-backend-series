const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name:{
        type: String,
        require: true,
        maxLenght: 50
    },
    age:{
        type: Number,
        require: true,
    },
    weight:{
        type: Number,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});

const UserModel = model("User", UserSchema)

module.exports = UserModel; 