import { Router } from 'express';
import { AuthenticateController } from './useCases/User/Authenticate/AuthenticateController';
import { CreateUserController } from './useCases/User/CreateUser/CreateUserController';

const router = Router();

const authenticateController = new AuthenticateController();
const createUserController = new CreateUserController();

router.get('/', (request, response) => {
  return response.send('Olá');
});

router.post('/authenticate', authenticateController.handle);
router.post('/user', createUserController.handle);

export { router };
