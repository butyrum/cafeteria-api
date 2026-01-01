import { Router } from "express";
import { AuthUserController } from "./controllers/auth/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();
const authUserController = new AuthUserController();
const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);
router.post("/session", authUserController.handle);

export { router };
