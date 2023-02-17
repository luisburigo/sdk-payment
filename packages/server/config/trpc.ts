import {inferAsyncReturnType, initTRPC} from "@trpc/server";
import * as trpcExpress from "@trpc/server/dist/adapters/express";
import {getUserById} from "../modules/user/services";

export const createContext = async ({req}: trpcExpress.CreateExpressContextOptions) => {
    async function authUser() {
        const {authorization} = req.headers;

        if (authorization) {
            return getUserById(authorization);
        }

        return null;
    }

    const user = await authUser();

    return {user};
};

type Context = inferAsyncReturnType<typeof createContext>;
export const t = initTRPC.context<Context>().create();