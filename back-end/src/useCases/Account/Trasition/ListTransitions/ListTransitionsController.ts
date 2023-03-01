import { Request, Response } from 'express';
import { ListTransitionsUseCase } from './ListTransitionsUseCase';

class ListTransitionsController {
  async handle(request: Request, response: Response) {
    const { userId } = request.body;

    const listTransitionsUseCase = new ListTransitionsUseCase();

    const { transitions } = await listTransitionsUseCase.execute({
      userId,
    });

    return response.json(transitions);
  }
}

export { ListTransitionsController };
