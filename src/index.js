import express from "express";
import cors from "cors";
import { stripHtml } from "string-strip-html";
import { signUp } from "../controllers/authController.js";


const app = express();
app.use(cors());
app.use(express.json());

app.post("/auth/sign-up", signUp)

app.listen(5000, () => console.log("Rodando em http://localhost:5000"));