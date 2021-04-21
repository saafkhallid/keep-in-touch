const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  

    Prenom:{
        type:String,
        require:true,
        maxLength:90
    },
    
    Nom: {
        type: String,
        require: true,
        maxLength: 150,
        trim: true
    },
    
    Email: {
        type: String,
        require: true,
        maxLength: 150
    },

    Telephone: {
        
        type: Number,
        require: true,

    },

    Message:{

        type:String,
        require: true,
        maxLength:200
    }
   
}, {timestamps: true});

module.exports = mongoose.model('contact', contactSchema);