import {signIn, signOut, useSession} from "next-auth/react";


const AppBar = () => {
    const {data: session} = useSession();
    return ( <div><h1>App Bar Text</h1>

            {session && session?.user ? <button onClick={() => signOut()}>Sign Out</button> :   <button onClick={() => signIn()}>Sign In</button> }

    <p>{JSON.stringify(session)}</p>

    </div>
    )
}

 export default AppBar;