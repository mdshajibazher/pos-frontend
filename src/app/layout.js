import * as React from "react";
import Box from '@mui/material/Box';
import TopBar from "@/components/TopBar";
import LeftSidebar from "@/components/LeftSidebar";
import ThemeRegistry from "@/theme/Themeregistry";
import NextAuthSessionProvider from "@/app/providers/sessionProvider";
import GlobalContextProvider from "@/theme/contexts/global-context";


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <ThemeRegistry session={session}>
      <body>
      <GlobalContextProvider>
          <NextAuthSessionProvider>
              <Box sx={{ display: 'flex' }}>
                  <TopBar/>
                  <LeftSidebar/>
                  {children}
              </Box>
          </NextAuthSessionProvider>
      </GlobalContextProvider>
      </body>
      </ThemeRegistry>
    </html>
  )
}
