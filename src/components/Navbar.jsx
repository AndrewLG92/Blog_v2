"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';
import '@/styles/navbar.scss';
import { signOut, useSession } from 'next-auth/react';

export default function NavBar() {
    const {status} = useSession();
    
    const HandleSignOut = () => {
        signOut({callbackUrl: '/login'});
    }

    useEffect(() => {
        const stop = 4; // Number of elements
        let i = 1;
    
        const intervalId = setInterval(() => {
          if (i > stop) {
            clearInterval(intervalId); // Stop the interval when i exceeds stop
            return;
          }
          document.getElementById('len' + i)?.classList.toggle('bounce');
          i++;
        }, 500);
    
        // Clean up function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run effect only once

    return (
        
        <div className="container mt-4">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid justify-content-center">
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><Link id="len1" className="hoverable" href="/">Home</Link></li>
                        <li className="nav-item"><Link id="len2" className="hoverable" href="/about">About</Link></li>
                        {status === 'authenticated' ? (
                            <li className="nav-item"><button id="len3" onClick={HandleSignOut} className="hoverable">Sign Out</button></li>,
                            <li className="nav-item"><Link id="len4" className="hoverable" href="/userprofile">Profile</Link></li>
                        ) : (
                            <li className="nav-item"><Link id="len3" className="hoverable" href="/login">Login</Link></li>
                        )}
                        
                    </ul>
                </div>
            </nav>
        </div>
        
    );
}