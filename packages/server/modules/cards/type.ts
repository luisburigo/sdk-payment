import {TypeOf, z} from "zod";

export const createCardInput = z.object({
    number: z.string(),
    email: z.string().email(`Invalid email`),
    name: z.string().max(50),
    cvv: z.string().length(3),
    date: z.string().datetime(),
});

export type CreateCardInput = TypeOf<typeof createCardInput>;