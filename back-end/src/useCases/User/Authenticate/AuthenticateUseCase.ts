import { client } from '../../../prisma/client'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateUser {
    userName: string
    password: string
}

class AuthenticateUserUseCase {
    async execute({ userName, password }: IAuthenticateUser) {
        if (!userName || userName === '') {
            throw new Error('username is required')
        }

        if (!password || password === '') {
            throw new Error('password is required')
        }

        const userAlreadyExists = await client.user.findFirst({
            where: {
                userName,
            },
        })

        if (!userAlreadyExists) {
            throw new Error('User or password incorrect')
        }

        const passwordMatch = await compare(
            password,
            userAlreadyExists.password
        )

        if (!passwordMatch) {
            throw new Error('User or password incorrect')
        }

        const token = sign({}, process.env.JWT_SECRET, {
            subject: userAlreadyExists.id,
            expiresIn: '4h',
        })

        const response = {
            userId: userAlreadyExists.id,
            token,
        }

        return { response }
    }
}

export { AuthenticateUserUseCase }
