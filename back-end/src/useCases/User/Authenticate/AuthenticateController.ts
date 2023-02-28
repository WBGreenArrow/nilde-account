import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUseCase'

class AuthenticateController {
    async handle(request: Request, response: Response) {
        const { userName, password } = request.body

        const authenticateUserUseCase = new AuthenticateUserUseCase()

        const { response: responseUser } =
            await authenticateUserUseCase.execute({
                userName,
                password,
            })

        return response.json(responseUser)
    }
}

export { AuthenticateController }
