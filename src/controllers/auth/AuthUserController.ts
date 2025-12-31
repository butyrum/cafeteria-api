import { Request, Response } from "express";
import { z } from "zod";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const authSchema = z.object({
      email: z.string().email(),
      password: z.string().min(1),
    });

    const { email, password } = authSchema.parse(req.body);

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({
      email,
      password,
    });

    return res.json(auth);
  }
}

export { AuthUserController };
