"use client"
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LoginIcon from '@mui/icons-material/Login';
import * as React from "react";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { useGlobalContext} from "@/theme/contexts/global-context";
import { useSession,signIn,signOut } from "next-auth/react"

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


export default function TopBar() {
    const { data: session } = useSession()

    const {sideNavOpen, setSideNavOpen} = useGlobalContext();
    const toggleDrawer = () => {
        setSideNavOpen(!sideNavOpen);
    };
    return (
        <AppBar position="absolute" open={sideNavOpen}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(sideNavOpen && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Dashboard
                </Typography>

                {!!session?.user &&
                    <IconButton color="inherit" onClick={signOut}>
                        {session?.user?.name}
                    </IconButton>
                }

                {!(!!session?.user) &&
                <IconButton color="inherit" onClick={signIn}>
                    <Badge badgeContent={'Login'} color="info">
                    <LoginIcon/>
                    </Badge>
                </IconButton>
                }
                {!!session?.user &&
                <IconButton color="inherit" onClick={signOut}>
                    <PowerSettingsNewIcon/>
                </IconButton>
                }
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

