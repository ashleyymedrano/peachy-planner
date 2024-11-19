import { Router } from "express";

import { signUp, login } from "../controllers/user.controller";

const userRouter = Router();

// Register a new user
userRouter.post("/signUp", signUp);

// Login a user
userRouter.post("/login", login);