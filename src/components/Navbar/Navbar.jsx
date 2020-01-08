import React from 'react';
import logo from '../../logo.jpg'
import "./Navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="City-Tours"></img>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-list">Home</a>
                </li>
                <li>
                    <a href="/" className="nav-list">About</a>
                </li>
                <li>
                    <a href="/" className="nav-list active">Tours</a>
                </li>
            </ul>
        </nav>
    )
}