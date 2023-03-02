import { Request, Response } from 'express';
import { ListTransitionsUseCase } from './ListTransitionsUseCase';

class ListTransitionsController {
  async handle(request: Request, response: Response) {
    const { userId } = request.body;

    const listTransitionsUseCase = new ListTransitionsUseCase();

    const { transitions, accountBalance } = await listTransitionsUseCase.execute({
      userId,
    });

    return response.json({ accountBalance, transitions });
  }
}

export { ListTransitionsController };
