import {TypeOf, z} from "zod";
import {PaymentType} from "@prisma/client";

export const createPaymentInput = z.object({
    type: z.nativeEnum(PaymentType),
    card: z.string(),
    order: z.object(({
        products: z.object({
            id: z.string(),
            name: z.string(),
            image: z.string(),
            price: z.number().int(),
            quantity: z.number().int(),
        }).array(),
        discount: z.number().optional(),
        value: z.number().int(),
        totalValue: z.number().int(),
    }))
})

export type CreatePaymentInput = TypeOf<typeof createPaymentInput>;