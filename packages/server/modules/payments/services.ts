import {CreatePaymentInput} from "./type";
import {Payment, PaymentProvider, PaymentType, User} from "@prisma/client";
import prismaClient from "../../config/prisma";

export const createPayment = async (input: CreatePaymentInput, user: User) => {
    const { type, card, order } = input;

    const createdOrder = await prismaClient.order.create({
        data: {
            products: JSON.stringify(order.products),
            discount: order.discount,
            value: order.value,
            totalValue: order.totalValue
        }
    });

    let createdPayment: Payment = await prismaClient.payment.create({
        data: {
            cardId: card,
            orderId: createdOrder.id,
            userId: user.id,
            type: type,
            provider: PaymentProvider.TEST,
        }
    });

    return createdPayment;
}