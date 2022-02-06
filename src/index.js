import express from "express";
import cors from "cors";
import { logIn, signUp } from "../controllers/authController.js";
import { getCredits, postCredit } from "../controllers/creditController.js";


const app = express();
app.use(cors());
app.use(express.json());

app.post("/auth/sign-up", signUp)

app.post("/auth/login", logIn)

app.post("/credits", postCredit)

app.get("/credits", getCredits)

app.listen(5000, () => console.log("Rodando em http://localhost:5000"));