import React, { useState } from 'react';
import './Modal.css'; // Stile del modal
import Login from './Login'; // Importa il componente Login
import Register from './Register'; // Importa il componente Register

const Modal = ({ closeModal }) => {
    const [isLogin, setIsLogin] = useState(true); // Stato per gestire la visualizzazione del login o della registrazione

    const toggleForm = () => {
        setIsLogin(!isLogin); // Cambia tra login e registrazione
    };

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={closeModal}>&times;</span>
                {/* <h2>{isLogin ? 'Login' : 'Registrati'}</h2> */}

                {/* Mostra Login o Register a seconda dello stato */}
                <div className="modal-forms">
                    {isLogin ? <Login /> : <Register />}
                </div>

                {/* Pulsante per passare tra Login e Register */}
                <p>
                    {isLogin ? 'Non hai un account? ' : 'Hai già un account? '}
                    <button className="toggle-button" onClick={toggleForm}>
                        {isLogin ? 'Registrati' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Modal;
