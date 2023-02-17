import {t} from "../../config/trpc";
import {createCardInput} from "./type";
import authMiddleware from "../../middlewares/auth";
import {createCard, getCards} from "./services";

const cardProcedures = {
    createCard: t.procedure
        .use(authMiddleware)
        .input(createCardInput)
        .mutation(opts => createCard(opts.input, opts.ctx.user)),
    myCards: t.procedure
        .use(authMiddleware)
        .query(opt => getCards(opt.ctx.user))
}

export default cardProcedures;