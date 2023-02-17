import {z, TypeOf} from "zod";
export const createUserInput = z.object({
    name: z.string().max(50),
    email: z.string().email(`Invalid email`),
});
export const fakeAuthInput = z.object({
    email: z.string().email(`Invalid email`),
});

export type CreateUserInput = TypeOf<typeof  createUserInput>;
export type FakeAuthInput = TypeOf<typeof  fakeAuthInput>;
