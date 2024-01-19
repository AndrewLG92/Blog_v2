"use client";

import GoogleBtn from "./GoogleSignBtn";
import UserProfile from "./UserProfile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function UserInfo() {

    const router = useRouter();
    const { status } = useSession();

    const UserHomePage = () => {
        router.push('/userprofile');
    }

    if( status === 'authenticated') {
        return <>{UserHomePage()}</>
    } else {
        return <GoogleBtn />
    }
}