import useAuthStore from "@/modules/auth/store";
import {Login} from "@/modules/auth/pages/login";
import useRouter from "@/modules/core/hooks/router";
import routes from "@/modules/core/hooks/router/routes";

function Core() {
  const {token} = useAuthStore();
  const {route: RouteComponent} = useRouter(routes);

  if (!token) {
    return <Login />
  }

  return <RouteComponent />
}

export default Core
