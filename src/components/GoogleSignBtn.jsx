"use client";


import Image from "next/image";
import { signIn } from "next-auth/react";
import '@/styles/googlebtn.scss';
import { useRouter } from "next/navigation";

export default function SignInBtn() {

    const router = useRouter();

    const HandleSignIn = () => {
        signIn("google")
        router.push('/userprofile');
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