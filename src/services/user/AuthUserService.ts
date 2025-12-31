import { compare, hash } from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../errors/AppError";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new AppError("Usuario ou senha incorretos", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Usuario ou senha incorretos", 401);
    }
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("Erro crítico: JWT_SECRET não configurado no .env");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      secret,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}
export { AuthUserService };
