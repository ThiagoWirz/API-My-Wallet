import express from "express";
import cors from "cors";
import joi from "joi";
import { stripHtml } from "string-strip-html";


const app = express();
app.use(cors());
app.use(express.json());


app.listen(5000, () => console.log("Rodando em http://localhost:5000"));