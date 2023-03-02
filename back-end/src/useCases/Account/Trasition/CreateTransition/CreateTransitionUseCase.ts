import { client } from '../../../../prisma/client';

interface ICreateTransition {
  userId: string;
  desc: string;
  trasitionType: 'deposit' | 'cashout';
  value: number;
  createdAt?: string;
}

class CreateTransitionUseCase {
  async execute({ userId, desc, trasitionType, value, createdAt }: ICreateTransition) {
    let dateFormat;

    if (!desc || desc == '') {
      throw new Error('Description is required');
    }

    if (trasitionType !== 'deposit' && trasitionType !== 'cashout') {
      throw new Error('Trasition type is invalid');
    }

    if (typeof value === 'string') {
      throw new Error('Value invalid');
    }

    if (createdAt) {
      const newDate = new Date(createdAt.split('/').reverse().join('/'));
      const currentData = new Date();

      if (newDate > currentData) {
        throw new Error('Date invalid');
      }
      dateFormat = newDate.toISOString();
    }

    const transition = await client.transitionAccount.create({
      data: {
        userId,
        trasitionType,
        desc,
        value,
        createdAt: dateFormat,
      },
    });

    // new Date(dateFormat).toLocaleString('pt-BR', {
    //   day: '2-digit',
    //   month: '2-digit',
    //   year: 'numeric',
    // });

    return { transition };
  }
}

export { CreateTransitionUseCase };
