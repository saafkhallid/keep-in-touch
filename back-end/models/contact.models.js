const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;
const contactSchema = Schema({
  nom: {
    type: String,
    required: true,
    min: 3,
    max: 48,
    trim: true,
  },
  prenom: {
    type: String,
    required: true,
    min: 3,
    max: 48,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    min: 10,
    max: 1024,
    trim: true,
  },
  date: {
    type: String,
    default: dt,
  },
});

module.exports = model('contact', contactSchema);
