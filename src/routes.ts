import { Router } from "express";
import { AuthUserController } from "./controllers/auth/AuthUserController";

const router = Router();
const authUserController = new AuthUserController();

router.post("/session", authUserController.handle);

export { router };
