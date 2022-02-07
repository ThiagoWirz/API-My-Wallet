import joi from "joi";
const creditSchema = joi.object({
    value: joi.number().precision(2).required(),
    description: joi.string().required(),
    type: joi.string().required(),
    date: joi.string().required()
})

export default creditSchema