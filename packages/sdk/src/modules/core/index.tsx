import useAuthStore from "@/modules/auth/store";
import {Login} from "@/modules/auth/pages/login";
import useRouter from "@/modules/core/hooks/router";

function Core() {
  const {token} = useAuthStore();
  const {route: RouteComponent} = useRouter();

  if (!token) {
    return <Login />
  }

  return <RouteComponent />
}

export default Core
