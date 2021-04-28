const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');
const moment = require('moment');
const { contactValidations } = require('../validations/contact.Validations');
const Contact = require('../models/contact.models');

exports.addContact = async (req, res) => {
  // validation
  const { error } = contactValidations(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  // creation newModel
  const newContact = new Contact({ ...req.body });
  try {
    /// Save
    const savedContact = await newContact.save();
    if (savedContact) return res.status(201).json(savedContact);
  } catch (error) {
    return res.status(500).json(error);
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    const allContacts = await Contact.find();
    if (allContacts) return res.status(200).json(allContacts);
  } catch (error) {
    return res.status(500).json(error);
  }
};
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

const transporter = nodemailer.createTransport(
  smtpTransport({
    host: 'smtp.gmail.com',
    auth: {
      type: 'custom',
      user: process.env.GM_E,
      pass: process.env.GM_P,
    },
  })
);
exports.replyContact = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  // console.log(message);
  try {
    const currentContact = await Contact.findOne({ _id: id });
    if (currentContact) {
      const mailOptions = {
        from: process.env.GM_E,
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
    const currentContact = await Contact.findOne({ _id: id });
    if (currentContact) return res.status(200).json(currentContact);
  } catch (error) {
    return res.status(500).json(error);
  }
};
