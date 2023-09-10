
import ThemeRegistry from "@/theme/Themeregistry";
import NextAuthSessionProvider from "@/app/providers/sessionProvider";
import * as React from "react";


export async function generateMetadata({ params }) {
    // read route params then fetch data

    // return an object
    return {
        title: 'Login ',
        description: 'Some desc from login page',
    };
}

export default function LoginLayout({ children, session }) {
    return (
        <html lang="en">
        <ThemeRegistry session={session}>
            <body>
            <NextAuthSessionProvider>
                    {children}
            </NextAuthSessionProvider>
            </body>
        </ThemeRegistry>
        </html>
    )
}