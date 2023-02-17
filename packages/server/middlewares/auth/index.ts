import {TRPCError} from "@trpc/server";
import {t} from "../../config/trpc";

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