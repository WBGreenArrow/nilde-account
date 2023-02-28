import { client } from '../../../prisma/client';
import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface ICreateUser {
  userName: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ userName, password }: ICreateUser) {
    const userAlreadyExists = await client.user.findFirst({
      where: {
        userName,
      },
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        userName,
        password: passwordHash,
      },
    });

    const account = await client.account.create({
      data: {
        userId: user.id,
        amount: 0.0,
      },
    });

    const token = sign({}, process.env.JWT_SECRET, {
      subject: userName,
      expiresIn: '4h',
    });

    const response = {
      userId: user.id,
      token,
      account,
    };

    return response;
  }
}

export { CreateUserUseCase };
