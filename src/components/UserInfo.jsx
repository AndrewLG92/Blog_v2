"use client";

import SignInBtn from "./SignInBtn";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function UserInfo() {
    const { status, data: session } = useSession();

    if( status === 'authenticated') {
        return (
            <div className="container card cd shadow-lg">
                <div className="card-body">
                    <center>
                        <Image alt="Users Icon" className="mi rounded-circle img-thumbnail" src={session?.user?.image} width={60} height={60} />
                        <div className="bar"></div>
                        <div className="card-title t">
                            Name: <span>{session?.user?.name}</span>
                        </div>
                        <div className="card-title t">
                            Email: <span>{session?.user?.email}</span>
                        </div>
                    </center>
                </div>
            </div>
        );
    } else {
        return <SignInBtn />;
        
    }

    
}