const Joi = require('joi');

exports.contactValidations = (data) => {
  const schema = Joi.object({
    nom: Joi.string().required().min(3).max(48).trim(),
    prenom: Joi.string().required().min(3).max(48).trim(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    message: Joi.string().required().min(10).max(1024).trim(),
  });

  return schema.validate(data);
};
