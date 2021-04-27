const { Router } = require('express');
const express = require('express')
const {create, Contact, }=require('../controllers/contactControl')

const router = express.Router();






router.get('/create', Contact);

router.post('/create', create);




contactRoutes.post('/reply/:id', replyContact);
contactRoutes.post('/singlecontact/:id', singleContact);
contactRoutes.post('/search', findContact);

module.exports=router;
