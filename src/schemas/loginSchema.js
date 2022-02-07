import joi from "joi";

const logInSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

export default logInSchema;
