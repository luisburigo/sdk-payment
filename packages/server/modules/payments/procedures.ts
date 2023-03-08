import {t} from "../../config/trpc";
import authMiddleware from "../../middlewares/auth";
import {createPaymentInput} from "./type";
import {createPayment} from "./services";

const paymentProcedures = {
    createPayment: t.procedure
        .use(authMiddleware)
        .input(createPaymentInput)
        .mutation(opts => createPayment(opts.input, opts.ctx.user))
};

export default paymentProcedures;