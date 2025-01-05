"use client";

import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* <img src="/logo.png" alt="Logo" /> */}
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/contact">Contact me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;