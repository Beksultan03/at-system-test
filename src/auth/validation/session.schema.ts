import Joi from 'joi';

export const sessionSchema = Joi.object({
  PHPSESSID: Joi.string().required(),
}).unknown(false);
