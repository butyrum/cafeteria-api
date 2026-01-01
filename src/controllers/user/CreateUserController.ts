import { Request, Response } from "express";
import { z } from "zod";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const CreateSchema = z.object({
      name: z.string().min(4),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { name, email, password } = CreateSchema.parse(req.body);

    const createUser = new CreateUserService();

    const create = await createUser.execute({
      name,
      email,
      password,
    });

    return res.json(create);
  }
}

export { CreateUserController };
