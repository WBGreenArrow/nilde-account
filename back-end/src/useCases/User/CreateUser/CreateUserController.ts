import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { userName, password } = request.body

        const createUser = new CreateUserUseCase()

        const responseUser = await createUser.execute({
            userName,
            password,
        })

        return response.json(responseUser)
    }
}

export { CreateUserController }
