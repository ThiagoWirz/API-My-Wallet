import { Router } from "express";
import { getCredits, postCredit } from "../controllers/creditController.js";
import { creditValidationMiddleware } from "../middlewares/creditValidationMiddleware.js";

const creditRouter = Router();

creditRouter.post("/credits", creditValidationMiddleware, postCredit);

creditRouter.get("/credits", getCredits);

export default creditRouter;
