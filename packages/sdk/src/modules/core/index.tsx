import useAuthStore from "@/modules/auth/store";
import {Login} from "@/modules/auth/pages/login";
import useRouter from "@/modules/core/hooks/router";
import Header from "@/components/header";
import {Box} from "@mui/material";

function Core() {
    const {token} = useAuthStore();
    const {route: RouteComponent} = useRouter();

    if (!token) {
        return <Login/>
    }

    return (
        <Box>
            <Header/>
            <RouteComponent/>
        </Box>
    )
}

export default Core
