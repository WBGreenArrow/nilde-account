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
    let newAmountBalance;

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

    const { id, amount } = await client.account.findFirst({
      where: {
        userId,
      },
    });

    if (trasitionType === 'cashout') {
      if (amount < value) {
        throw new Error('Insufficient funds');
      }
      newAmountBalance = amount - value;
    } else {
      newAmountBalance = amount + value;
    }

    const { amount: accountBalance } = await client.account.update({
      where: {
        id,
      },
      data: {
        amount: newAmountBalance,
      },
    });

    const transition = await client.transitionAccount.create({
      data: {
        userId,
        trasitionType,
        desc,
        value,
        createdAt: dateFormat,
      },
    });

    // if (transition) {
    // }

    // new Date(dateFormat).toLocaleString('pt-BR', {
    //   day: '2-digit',
    //   month: '2-digit',
    //   year: 'numeric',
    // });

    return { transition, accountBalance };
  }
}

export { CreateTransitionUseCase };
