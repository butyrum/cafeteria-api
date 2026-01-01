import { hash } from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../errors/AppError";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new AppError("Necessario um email para cadrasto! ", 401);
    }

    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new AppError("Email ja existe! ", 401);
    }

    const passwordHash = await hash(password, 8);

    const Create = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return {
      Create,
    };
  }
}

export { CreateUserService };
