const contact= require("../models/contact");

// const smtpTransport = require('nodemailer-smtp-transport');
var nodemailer = require('nodemailer');


module.exports = {
    Contact: function (req, res) {
      contact
        .find()
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

    contact: function (req,res){

    }
};



      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        }
      });

      var mailOptions = {
        from:  process.env.EMAIL,
        to:  process.env.EMAIL,
        subject: 'Test Email',
        text: 'bonjour khalid saaf'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log(' Email sent: ' + info.response);
        }
      });




      exports.findContact = async (req, res) => {
        const { date } = req.body;
        const { email } = req.body;
        // console.log(date);
        // console.log(new Date(date));
        try {
          if (date && email) {
            const result = await Contact.find({ email, date });
            if (result) return res.status(200).json(result);
          } else if (date && !email) {
            const result = await Contact.find({ date });
            if (result) return res.status(200).json(result);
          } else if (!date && email) {
            const result = await Contact.find({ email });
            if (result) return res.status(200).json(result);
          }
        } catch (error) {
          return res.status(500).json(error);
        }
      };
      

      exports.postreply = async (req, res) => {
        const { id } = req.params;
        const { message } = req.body;
        try{
        const currentContact = await Contact.findOne({ _id: id });
        console.log(currentContact)
        if (currentContact) {
      const mailOptions = {
        from: process.env.EMAIL,
        to: currentContact.Email,
        subject: 'Sending Email ',
        text: message,
      };
      const envoiMail = await transporter.sendMail(mailOptions);
      if (envoiMail) res.status(200).json('Mail sent');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
 };


      exports.replyContact = async (req, res) => {
        const { id } = req.params;
        const { message } = req.body;
        // console.log(message);
        try {
          const currentContact = await contact.findOne({ _id: id });
          if (currentContact) {
            const mailOptions = {
              from: process.env.EMAIL,
              to: currentContact.email,
              subject: 'Mail',
              text: message,
            };
            const envoiMail = await transporter.sendMail(mailOptions);
            if (envoiMail) res.status(200).json('Mail sent');
          }
        } catch (error) {
          return res.status(500).json(error);
        }
      };
      
      exports.singleContact = async (req, res) => {
        const { id } = req.params;
        try {
          const currentContact = await contact.findOne({ _id: id });
          if (currentContact) return res.status(200).json(currentContact);
        } catch (error) {
          return res.status(500).json(error);
        }
      };
      







      // exports.findContact = async (req, res) => {
      //   const { date } = req.body;
      //   const { email } = req.body;
      //   // console.log(date);
      //   // console.log(new Date(date));
      //   try {
      //     if (date && email) {
      //       const result = await contact.find({ email, date });
      //       if (result) return res.status(200).json(result);
      //     } else if (date && !email) {
      //       const result = await contact.find({ date });
      //       if (result) return res.status(200).json(result);
      //     } else if (!date && email) {
      //       const result = await contact.find({ email });
      //       if (result) return res.status(200).json(result);
      //     }
      //   } catch (error) {
      //     return res.status(500).json(error);
      //   }
      // };
      
      // const transporter = nodemailer.createTransport(
      //   smtpTransport({
      //     host: 'smtp.gmail.com',
      //     auth: {
      //       type: 'custom',
      //       user: process.env.GM_E,
      //       pass: process.env.GM_P,
      //     },
      //   })
      // );


      // exports.replyContact = async (req, res) => {
      //   const { id } = req.params;
      //   const { message } = req.body;
      //   // console.log(message);
      //   try {
      //     const currentContact = await Contact.findOne({ _id: id });
      //     if (currentContact) {
      //       const mailOptions = {
      //         from: process.env.GM_E,
      //         to: currentContact.email,
      //         subject: 'Mail',
      //         text: message,
      //       };
      //       const envoiMail = await transporter.sendMail(mailOptions);
      //       if (envoiMail) res.status(200).json('Mail sent');
      //     }
      //   } catch (error) {
      //     return res.status(500).json(error);
      //   }
      // };
      
      // exports.singleContact = async (req, res) => {
      //   const { id } = req.params;
      //   try {
      //     const currentContact = await contact.findOne({ _id: id });
      //     if (currentContact) return res.status(200).json(currentContact);
      //   } catch (error) {
      //     return res.status(500).json(error);
      //   }
      // };