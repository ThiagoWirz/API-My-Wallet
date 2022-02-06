import joi from "joi";
import db from "../src/database.js";

const creditSchema = joi.object({
    value: joi.number().precision(2).required(),
    description: joi.string().required(),
    type: joi.string().required(),
    date: joi.string().required()
})


export async function postCredit(req, res){
    const credit = req.body
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "")

    const validation = creditSchema.validate(credit)
    if(validation.error){
        res.sendStatus(422)
        return
    }
    try{
        const session = await db.collection("sessions").findOne({token})
        await db.collection("credits").insertOne({...credit, idUser: session.idUser})
        res.sendStatus(201)
    }
catch{
    res.sendStatus(500)
}
}