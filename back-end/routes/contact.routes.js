const express = require('express');

const contactRoutes = express.Router();

const {
  getAllContacts,
  addContact,
  findContact,
  replyContact,
  singleContact,
  
} = require('../controllers/contact.controller');

contactRoutes.get('/', getAllContacts);
contactRoutes.post('/add', addContact);
contactRoutes.post('/reply/:id', replyContact);
contactRoutes.post('/singlecontact/:id', singleContact);
contactRoutes.post('/search', findContact);

module.exports = contactRoutes;
