const contact= require("../models/contact");
var nodemailer = require('nodemailer');






module.exports = {
    list: function (req, res) {
      contact
        .find({})
        .then(function (result) {
          res.json(result);
        })
        .catch((err) => res.json(err).status(500).end());
    },
    create: function (req, res) {
      const {Prenom, Nom,Email,Telephone, Message} = req.body;
      contact
        .insertMany([{ Prenom, Nom, Email,Telephone,Message }])
        .then(function (result) {
          res.json(result);
        })
        .catch((err) => res.json(err).status(500).end());
    },
};





      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'khaliid.saaf@gmail.com',
          pass: 'youcode+2020'
        }
      });

      var mailOptions = {
        from: 'khaliid.saaf@gmail.com',
        to: 'dounia.lasfar1@gmail.com',
        subject: 'Test Email',
        text: 'bonjour Dounia ca va'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log(' Email sent: ' + info.response);
        }
      });