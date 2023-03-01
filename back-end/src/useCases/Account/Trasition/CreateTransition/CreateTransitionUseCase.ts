import { client } from '../../../../prisma/client';

interface ICreateTransition {
  userId: string;
  desc: string;
  trasitionType: 'deposit' | 'cashout';
  value: number;
}

class CreateTransitionUseCase {
  async execute({ userId, desc, trasitionType, value }: ICreateTransition) {
    if (!desc || desc == '') {
      throw new Error('Description is required');
    }

    if (trasitionType !== 'deposit' && trasitionType !== 'cashout') {
      throw new Error('Trasition type is invalid');
    }

    if (typeof value === 'string') {
      throw new Error('Value invalid');
    }

    const transition = await client.transitionAccount.create({
      data: {
        userId,
        trasitionType,
        desc,
        value,
      },
    });

    return { transition };
  }
}

export { CreateTransitionUseCase };
