"use client"

import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
    const [navbar, setNavBar] = useState(false);
    return (
        <div className="container-fluid container-w p-0">
            <div className="navbar navbar-expand-lg bg-dark">
                <ul>
                    <li>
                        <Link href="/">
                            <h2 className=""></h2>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/blog/post">Blog Post</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;