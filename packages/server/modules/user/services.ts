import {CreateUserInput, FakeAuthInput} from "./type";
import prismaClient from "../../config/prisma";

export const createUser = async (input: CreateUserInput) => {
    const hasUser = await prismaClient.user.findFirst({
        where: {
            email: input.email
        }
    });

    if (hasUser) {
        throw new Error('User registered.')
    }

    const user = await prismaClient.user.create({
        data: {
            name: input.name,
            email: input.email,
        }
    });

    return {
        user,
        success: true,
    };
}
export const fakeAuth = async (input: FakeAuthInput) => {
    const user = await prismaClient.user.findFirst({
        where: {
            email: input.email
        }
    });

    if (!user) {
        throw new Error('User not found');
    }

    return {
        user,
        token: user.id,
        success: true,
    };
}

export const getUserById = async (id: string) => {
    return prismaClient.user.findFirst({
        where: {id}
    });
}