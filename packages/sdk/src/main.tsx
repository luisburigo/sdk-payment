import React from 'react'
import ReactDOM from 'react-dom/client'
import Core from '@/modules/core'
import {RenderParams} from "@/main.types";
import emitter, {Events} from "@/utils/events";
import {trpc, trpcClient} from './config/trpc';
import {queryClient} from "@/config/reactQuery";
import {QueryClientProvider} from "@tanstack/react-query";
import {CssBaseline} from "@mui/material";

class AppSdk {

    static on<E extends keyof Events>(name: E, callback: Events[E]) {
        emitter.on(name, callback);
    }

    static off<E extends keyof Events>(name: E, callback: Events[E]) {
        emitter.off(name, callback);
    }

    static render(params: RenderParams) {
        const $el = typeof params.element === 'string' ?
            document.getElementById(params.element) as HTMLElement :
            params.element;

        ReactDOM.createRoot($el).render(
            <React.StrictMode>
                <trpc.Provider client={trpcClient} queryClient={queryClient}>
                    <QueryClientProvider client={queryClient}>
                        <CssBaseline>
                            <Core/>
                        </CssBaseline>
                    </QueryClientProvider>
                </trpc.Provider>
            </React.StrictMode>,
        )
    }
}

export default AppSdk;
