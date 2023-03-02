import { client } from '../../../../prisma/client';

interface IListTransition {
  userId: string;
}

class ListTransitionsUseCase {
  async execute({ userId }: IListTransition) {
    if (!userId || userId === '') {
      throw new Error('userId is required');
    }

    const userAlreadyExists = await client.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userAlreadyExists) {
      throw new Error('Unauthorized');
    }

    const transitions = await client.transitionAccount.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const { amount: accountBalance } = await client.account.findFirst({
      where: {
        userId,
      },
    });

    return { transitions, accountBalance };
  }
}

export { ListTransitionsUseCase };
