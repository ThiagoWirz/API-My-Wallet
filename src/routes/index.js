import { Router } from "express";
import authRouter from "./authRouter.js";
import creditRouter from "./creditRouter.js";

const router = Router()
router.use(authRouter)
router.use(creditRouter)

export default router