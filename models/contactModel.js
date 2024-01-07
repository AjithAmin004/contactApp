const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is a required field']
    },
    email:{
        type:String,
        required:[true,'Email is a required field']
    },
    phone:{
        type:String,
        required:[true,'Phone number is a required field']
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('contact',contactSchema)