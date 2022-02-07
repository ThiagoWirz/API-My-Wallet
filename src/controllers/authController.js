import bcrypt from "bcrypt";
import db from "../database.js";
import {v4 as uuid} from "uuid"
import userSchema from "../schemas/userSchema.js";
import logInSchema from "../schemas/loginSchema.js";




export async function signUp(req, res) {
  const user = req.body;

  const validation = userSchema.validate(user);
  if (validation.error) {
    res.sendStatus(422);
    return;
  }

  const sameEmail = await db.collection("users").findOne({ email: user.email });
  if (sameEmail) {
    res.sendStatus(401);
    return;
  }

  const hashPassword = bcrypt.hashSync(user.password, 10);

  try {
    await db.collection("users").insertOne({ ...user, password: hashPassword });

    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function logIn(req, res) {
  const {email, password, name} = req.body;

  const validation = logInSchema.validate({email, password});
  if (validation.error) {
    res.sendStatus(422);
    return;
  }

  try{
  const user = await db.collection("users").findOne({email})

  if(!user){
      res.sendStatus(401)
      return
  }
  if(bcrypt.compareSync(password, user.password)){
      const token = uuid();
      await db.collection("sessions").insertOne(({token, idUser: user._id}))
      res.send({name, token})
      return
  }
  res.sendStatus(401);
} catch(error){
    res.sendStatus(500)
}
}
