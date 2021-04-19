const express = require('express')
const contactRoute=require('../controllers/contactControl')

const router = express.Router();




router.post('/list', contactRoute.list);

router.post('/create', contactRoute.create);


module.exports=router;
