"use client"

import Link from 'next/link';
import '@/styles/navbar.scss';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

function NavBar() {
    const [navbar, setNavBar] = useState(false);
    const {status} = useSession();
    return (
        
        <div className="navbar mt-3 justify-content-between shadow-lg p-3 border-2 container-xl">
            <Link className=" text-decoration-none fs-2 fw-bold text-color" href={"/"}>Blogs</Link>
            <Link className=" text-decoration-none fs-2 fw-bold text-color" href={"/publicpost"}>Public Post</Link>
            {status === 'authenticated' ? (
                <button onClick={() => signOut()} className="btn btn-bd-primary">Sign Out</button>
            ) : (
                <button onClick={() => signIn("google")} className="btn btn-bd-primary">Sign In</button>
            )}
            
        </div>
        
    );
}

export default NavBar;