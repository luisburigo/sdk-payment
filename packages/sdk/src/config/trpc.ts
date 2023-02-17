import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import type {AppRouter} from "@app/server";
import useAuthStore from "@/modules/auth/store";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/trpc',
            headers() {
                return {
                    authorization: useAuthStore.getState().token as string,
                };
            },
        }),
    ],
})