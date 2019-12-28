import joi from "joi";

const wrapValidator = (schema) => (obj) => joi.validate(obj, schema);

export const validatePoll = wrapValidator(
  joi.object({
    question: joi.string().required(),
    details: joi.string(),
    options: joi.array().required()
  }).required()
);

export const validateVote = wrapValidator(
  joi.object({
    poll: joi.string().required(),
    user: joi.string().required(),
    optionId: joi.string().required()
  }).required()
);
