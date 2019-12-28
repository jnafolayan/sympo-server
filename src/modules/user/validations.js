import joi from "joi";

const wrapValidator = (schema) => (obj) => joi.validate(obj, schema);

export const validateUser = wrapValidator(
  joi.object({
    username: joi.string().max(16).required(),
    password: joi.string().min(8).required(),
    email: joi.string().required()
  }).required()
);

export const validateLogin = wrapValidator(
  joi.object({
    username: joi.string().max(16).required(),
    password: joi.string().min(8).required()
  }).required()
);