import {User} from "@prisma/client";
import {CreateCardInput} from "./type";
import prismaClient from "../../config/prisma";

export const createCard = async (input: CreateCardInput, user: User) => {
    const card = await prismaClient.card.create({
        data: {
            name: input.name,
            cvv: input.cvv,
            date: input.date,
            number: input.number,
            userId: user.id
        }
    });

    return card;
}

export const getCards = async (user: User) => {
    const cards = await prismaClient.card.findMany({
        where: {
            userId: user.id,
        }
    })

    return cards
}