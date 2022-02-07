import creditSchema from "../schemas/creditSchema.js"

export function creditValidationMiddleware(req, res, next){
    const credit = req.body
    const validation = creditSchema.validate(credit)
    if(validation.error){
        res.sendStatus(422)
        return
    }
    next()
}