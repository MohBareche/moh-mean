// VALIDATION
import Joi from "@hapi/joi";

// Register Validation
export default {
  registerValidation(body) {
    const schema = Joi.object({
      name: Joi.string()
        .min(6)
        .max(255)
        .required(),
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .lowercase()
        .email(),
      password: Joi.string()
        .min(6)
        .max(1024)
        .required()
    });
    return schema.validate(body);
  },

  // Login Validation
  loginValidation(body) {
    const schema = Joi.object({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email(),
      password: Joi.string()
        .min(6)
        .max(1024)
        .required()
    });
    return schema.validate(body);
  }
};
