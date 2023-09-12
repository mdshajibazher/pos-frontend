import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
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
                    return {...responseJSON.user ,apiToken : responseJSON.token};
                }else{
                    return null;
                }


            }
        })
    ],

    session: {
      strategy: "jwt"
    },

    pages: {
        signIn: '/login'
    }
})

export {handler as GET, handler as POST}