import joi from "joi";

const wrapValidator = (schema) => (obj) => joi.validate(obj, schema);

export const validateComment = wrapValidator(
  joi.object({
    author: joi.string().required(),
    message: joi.string().required(),
    poll: joi.string().required()
  }).required()
);

export const validateUpvote = wrapValidator(
  joi.object({
    voter: joi.string().required(),
    comment: joi.string().required()
  }).required()
);
