import {signIn, signOut, useSession} from "next-auth/react";


const AppBar = () => {
    const {data: session} = useSession();
    return ( <div><h1>App Bar Text</h1>

            {session && session?.user ?   <button onClick={() => signIn()}>Sign In</button> : <button onClick={() => signOut()}>Sign Out</button>}

    <p>{JSON.stringify(session?.user)}</p>

    </div>
    )
}

 export default AppBar;