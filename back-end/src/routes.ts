import { Router } from 'express';
import { AuthenticateController } from './useCases/User/Authenticate/AuthenticateController';
import { CreateUserController } from './useCases/User/CreateUser/CreateUserController';

import { CreateTransitionController } from './useCases/Account/Trasition/CreateTransition/CreateTransitionController';
import { ListTransitionsController } from './useCases/Account/Trasition/ListTransitions/ListTransitionsController';

const router = Router();

const authenticateController = new AuthenticateController();
const createUserController = new CreateUserController();
const listTransitionsController = new ListTransitionsController();
const createTransitionController = new CreateTransitionController();

router.get('/', (request, response) => {
  return response.send('Olá');
});

router.get('/transitions', listTransitionsController.handle);
router.post('/transition', createTransitionController.handle);

router.post('/authenticate', authenticateController.handle);
router.post('/user', createUserController.handle);

export { router };
