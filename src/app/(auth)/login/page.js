"use client"
import {useState} from "react";
import emailIcon from 'public/assets/images/email.svg';
import passwordIcon from 'public/assets/images/password.svg';
import Image from 'next/image';

import {signIn,getCsrfToken} from "next-auth/react";
import {useSearchParams} from "next/navigation";
const Login = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const error = searchParams.get('error') ? 'Invalid Credential' : '';
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const   handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const result = await signIn("credentials",{
                email,
                password,
                redirect: true,
                callbackUrl: callbackUrl
            })
            return result
        }catch (e){
            console.log('e',e);
        }

    }


    return (

        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card-group d-block d-md-flex row">
                            <div className="card col-md-7 p-4 mb-0">

                                <div className="card-body">
                                    <h1>Login  </h1>

                                    {error &&
                                        <div className="alert alert-danger show" role="alert"> {error}
                                        </div> }
                                    <form onSubmit={handleSubmit}>
                                        <p className="text-medium-emphasis">Sign In to your account </p>
                                        <div className="input-group mb-3">

                                        <span className="input-group-text">
                                             <Image
                                                 src={emailIcon}
                                                 width={28}
                                                 height={28}
                                                 alt="Picture of the author"
                                             />
                                        </span>
                                            <input name="csrfToken" type="hidden" value={getCsrfToken()}/>
                                            <input
                                                name="email"
                                                className="form-control"
                                                type="text"
                                                placeholder="Email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />

                                        </div>
                                        <div className="input-group mb-4">
                                        <span className="input-group-text">
                                          <Image
                                              src={passwordIcon}
                                              width={28}
                                              height={28}
                                              alt="Picture of the author"
                                          />
                                    </span>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />

                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <button  className="btn btn-primary px-4">Login</button>
                                            </div>
                                            <div className="col-6 text-end">
                                                <button  className="btn btn-link px-0" type="button">Forgot password?
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>


                            </div>
                            <div className="card col-md-5 text-white bg-primary py-5">
                                <div className="card-body text-center">
                                    <div>
                                        <h2>Sign up</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <button className="btn btn-lg btn-outline-light mt-3" type="button">Register
                                            Now!
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}

signIn.getInitialProps = async (context) => {
    return {
        csrfToken: await getCsrfToken()
    }
}
export default Login