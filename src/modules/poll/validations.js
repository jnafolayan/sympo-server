import joi from "joi";

const wrapValidator = (schema) => (obj) => joi.validate(obj, schema);

export const validatePoll = wrapValidator(
  joi.object({
    question: joi.string().required(),
    options: joi.array().required()
  }).unknown()
);

export const validateVote = wrapValidator(
  joi.object({
    poll: joi.string().required(),
    user: joi.string().required(),
    optionId: joi.string().required()
  }).required()
);
