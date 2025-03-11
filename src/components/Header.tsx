"use client";

import React from 'react';
import Link from 'next/link';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* <img src="/logo.png" alt="Logo" /> */}
            </div>
            <nav className="nav">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/contact">Contact me</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;