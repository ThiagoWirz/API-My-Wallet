import bcrypt from "bcrypt";
import db from "../database.js";
import { v4 as uuid } from "uuid";

export async function signUp(req, res) {
  const user = req.body;

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
  const { email, password } = req.body;

  try {
    const user = await db.collection("users").findOne({ email });
    const name = user.name;

    if (!user) {
      res.sendStatus(401);
      return;
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = uuid();
      await db.collection("sessions").insertOne({ token, idUser: user._id });
      res.send({ name, token });
      return;
    }
    res.sendStatus(401);
  } catch (error) {
    res.sendStatus(500);
  }
}
