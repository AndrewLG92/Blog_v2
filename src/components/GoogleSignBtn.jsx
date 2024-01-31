"use client";


import Image from "next/image";
import { signIn } from "next-auth/react";
import '@/styles/googlebtn.scss';

export default function SignInBtn() {


    const HandleSignIn = () => {
        signIn("google", { callbackUrl: '/userprofile'});
    }

    return (
        <div className="container text-center sib">
            <div className="row">
                <div className="col">
                    <button 
                        onClick={HandleSignIn} 
                        className="btn btn-outline-primary align-items-center shadow-lg">
                        <Image className="img" alt="Google Logo" src='/google-logo.png' height={30} width={30}/>
                        <span className="fs-5 lht">
                            Sign In With Google
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}