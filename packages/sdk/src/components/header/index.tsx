import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useRouter from "@/modules/core/hooks/router";
import useAuthStore from "@/modules/auth/store";

function Header() {
    const {prevRoute} = useRouter();
    const {setToken} = useAuthStore();

    return (
        <AppBar position="static">
            <Toolbar variant="regular" color="secondary">
                <IconButton
                    sx={{mr: 2}}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="back"
                    onClick={prevRoute}
                >
                    <ChevronLeftIcon/>
                </IconButton>
                <Box sx={{flexGrow: 1}}/>
                <Button
                    onClick={() => setToken(null)}
                    color="inherit"
                >
                    Sair
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;