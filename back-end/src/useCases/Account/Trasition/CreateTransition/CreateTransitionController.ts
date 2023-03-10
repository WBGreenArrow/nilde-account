import { Request, Response } from 'express';
import { CreateTransitionUseCase } from './CreateTransitionUseCase';

class CreateTransitionController {
  async handle(request: Request, response: Response) {
    const { userId, desc, trasitionType, value, createdAt } = request.body;

    const createTransitionUseCase = new CreateTransitionUseCase();
    const { transition, accountBalance } = await createTransitionUseCase.execute({
      userId,
      desc,
      trasitionType,
      value,
      createdAt,
    });

    return response.json({ transition, accountBalance });
  }
}

export { CreateTransitionController };
