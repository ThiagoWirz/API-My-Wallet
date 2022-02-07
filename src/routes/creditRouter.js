import { Router } from "express";
import { getCredits, postCredit } from "../controllers/creditController.js";

const creditRouter = Router();

creditRouter.post("/credits", postCredit);

creditRouter.get("/credits", getCredits);

export default creditRouter;
