"use client";

import GoogleBtn from "./GoogleSignBtn";
import UserProfile from "./UserProfile";
import { useSession } from "next-auth/react";


export default function UserInfo() {
    const { status } = useSession();

    if( status === 'authenticated') {
        return <UserProfile />;
    } else {
        return <GoogleBtn />;
    }
}