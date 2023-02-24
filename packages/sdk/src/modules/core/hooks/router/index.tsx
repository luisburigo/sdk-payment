import {create} from "zustand";
import {RouterStore, Routes} from "@/modules/core/hooks/router/types";

const useRouterStore = create<RouterStore>(setState => ({
    actualRoute: 0,
    setActualRoute: route => setState({ actualRoute: route })
}));

const useRouter = (routes: Routes) => {
    const {actualRoute, setActualRoute} = useRouterStore();

    const minRoutePosition = 0;
    const maxRoutePosition = routes.length - 1;

    const nextRoute = () => {
        if (actualRoute >= maxRoutePosition) return;

        setActualRoute(actualRoute + 1);
    }

    const prevRoute = () => {
        if (actualRoute <= minRoutePosition) return;

        setActualRoute(actualRoute - 1);
    }

    return {
        route: routes[actualRoute],
        nextRoute,
        prevRoute,
    }
}

export default useRouter;