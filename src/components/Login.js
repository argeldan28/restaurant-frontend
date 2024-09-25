import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password
            });
            // Supponiamo che il server ritorni un token JWT
            const token = response.data.token; // Adatta in base alla tua risposta del server

            // Salva il token nel localStorage o in un contesto globale
            localStorage.setItem('token', token);
            setSuccessMessage('Login effettuato con successo!'); // Messaggio di successo
            setErrorMessage(''); // Resetta il messaggio di errore
            // Puoi anche reindirizzare l'utente a una pagina diversa dopo il login
            // window.location.href = '/home'; // Ad esempio, reindirizza alla homepage
        } catch (error) {
            console.error("Login error", error);
            setErrorMessage('Nome utente o password non corretti.'); // Mostra messaggio di errore
            setSuccessMessage(''); // Resetta il messaggio di successo
        }
    }

    return (
        <div>
            <h2>Login</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Mostra messaggio di errore */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Mostra messaggio di successo */}
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username} 
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
