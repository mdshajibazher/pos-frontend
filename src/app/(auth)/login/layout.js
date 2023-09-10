"use client"
import {SessionProvider} from "next-auth/react";


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
        <body>
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
        </body>
        </html>
    )
}