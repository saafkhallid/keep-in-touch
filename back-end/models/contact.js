const mongoose = require('mongoose');
const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;

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
        unique: true,
        maxLength: 150
        
    },

    Telephone: {
        
        type: Number,
        unique: true,
        require: true,

    },

    Message:{

        type:String,
        require: true,
        maxLength:200
    },
    date: {
        type: String,
        default: dt,
      }
   
}, {timestamps: true});

module.exports = mongoose.model('contact', contactSchema);