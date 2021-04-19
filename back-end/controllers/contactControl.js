const contact= require("../models/contact");


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
