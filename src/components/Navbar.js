import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a Navbar CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">MyApp</Link>
                <ul className="navbar-menu">
                    <li>
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="navbar-link">Menu</Link>
                    </li>
                    <li>
                        <Link to="/login" className="navbar-link">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="navbar-link">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
