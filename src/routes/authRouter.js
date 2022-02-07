import {Router} from "express"
import { logIn, signUp } from "../controllers/authController.js";

const authRouter = Router()
authRouter.post("/auth/sign-up", signUp)
authRouter.post("/auth/login", logIn)
export default authRouter