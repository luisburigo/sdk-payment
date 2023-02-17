import {t} from "../../config/trpc";
import {TRPCError} from "@trpc/server";

const authMiddleware = t.middleware( ({ ctx, next }) => {
    if (!ctx.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    return next({
        ctx: {
            user: ctx.user
        }
    })
});

export default authMiddleware;