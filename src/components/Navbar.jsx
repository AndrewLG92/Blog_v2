"use client"

import Link from 'next/link';
import '@/styles/navbar.scss';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function NavBar() {
    const {status} = useSession();
    const router = useRouter();
    
    const HandleSignOut = () => {
        signOut()
        router.push('/login');
    }

    return (
        
        <div className="navbar mt-3 justify-content-between shadow-lg p-3 border-2 container-xl">
            <Link className=" text-decoration-none fs-2 fw-bold text-color" href="/">Blogs</Link>
            <Link className=" text-decoration-none fs-2 fw-bold text-color" href="/publicpost">Public Post</Link>
            {status === 'authenticated' ? (
                <button onClick={HandleSignOut} className="btn btn-bd-primary">Sign Out</button>
            ) : (
                <Link href="/login" className="btn btn-bd-primary">Sign In</Link>
            )}
            
        </div>
        
    );
}