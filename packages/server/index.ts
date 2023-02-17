import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import cors from 'cors';

import {createContext, t} from "./config/trpc";

import userProcedures from "./modules/user/procedures";
import cardProcedures from "./modules/cards/procedures";

export const appRouter = t.router({
    ...userProcedures,
    ...cardProcedures,
});

export type AppRouter = typeof appRouter;

const app = express();

app.use(cors());
app.use((req, res, next) => {
    console.log('Request Type:', req.method);
    console.log('Time:', Date.now());
    next();
});

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    }),
);

app.listen(3000, () => {
    console.log('Running at http://localhost:3000')
});
