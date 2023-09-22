import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const {email, password} = credentials;

                const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/login',{
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                })

                let responseJSON = await res.json();
                if(res.ok && responseJSON?.user){
                    return {...responseJSON.user ,apiToken : responseJSON.accessToken};
                }else{
                    return null;
                }


            }
        })
    ],
    session: {
        strategy: "jwt",
        // Seconds - How long until an idle session expires and is no longer valid.
        // maxAge: 30 * 24 * 60 * 60, // 30 days

        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        // updateAge: 24 * 60 * 60, // 24 hours
    },
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //     return true
        // },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // },
        async jwt({ token, user }) {
            // console.log('jwt token ', token)
            // console.log('jwt user ', user)
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // console.log('session session ', session)
            // console.log('session token ', token)
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: '/login'
    }
};