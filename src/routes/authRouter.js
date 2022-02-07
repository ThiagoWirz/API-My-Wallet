import { Router } from "express";
import { logIn, signUp } from "../controllers/authController.js";
import { loginValidationMiddleware } from "../middlewares/loginValidationMiddleware.js";
import { userValidationMiddleware } from "../middlewares/userValidationMiddleware.js";

const authRouter = Router();
authRouter.post("/auth/sign-up", userValidationMiddleware, signUp);
authRouter.post("/auth/login", loginValidationMiddleware, logIn);
export default authRouter;
