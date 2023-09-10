import ThemeRegistry from "@/theme/Themeregistry";
import Box from "@mui/material/Box";
import TopBar from "@/components/TopBar";
import LeftSidebar from "@/components/LeftSidebar";
import * as React from "react";
import {SessionProvider} from "next-auth/react";

export default function MaterialUILayout(  { children, session }){
    return (
        <SessionProvider session={session}>
        <ThemeRegistry>
            <body>
            <Box sx={{ display: 'flex' }}>
                <TopBar/>
                <LeftSidebar/>
                {children}
            </Box>
            </body>
        </ThemeRegistry>
        </SessionProvider>
    )
}