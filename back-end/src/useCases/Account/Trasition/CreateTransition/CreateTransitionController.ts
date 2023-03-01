import { Request, Response } from 'express';
import { CreateTransitionUseCase } from './CreateTransitionUseCase';

class CreateTransitionController {
  async handle(request: Request, response: Response) {
    const { userId, desc, trasitionType, value } = request.body;

    const createTransitionUseCase = new CreateTransitionUseCase();
    const { transition } = await createTransitionUseCase.execute({
      userId,
      desc,
      trasitionType,
      value,
    });

    return response.json(transition);
  }
}

export { CreateTransitionController };
