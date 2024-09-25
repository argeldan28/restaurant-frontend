import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Stile per il componente Navbar
import Modal from './Modal'; // Importa il componente Modal

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Logo a sinistra */}
                    <Link to="/" className="navbar-logo">MyApp</Link>
                    
                    {/* Link centrati */}
                    <ul className="navbar-menu">
                        <li>
                            <Link to="/" className="navbar-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/menu" className="navbar-link">Menu</Link>
                        </li>
                    </ul>
                    
                    {/* Pulsante Order Now a destra */}
                    <button onClick={openModal} className="order-now-btn">Order Now</button>
                </div>
            </nav>

            {/* Modal */}
            {isModalOpen && <Modal closeModal={closeModal} />}
        </>
    );
};

export default Navbar;
