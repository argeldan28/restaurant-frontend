import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Importa il file CSS per lo stile

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
            const token = response.data.token; // Adatta in base alla tua risposta del server
            localStorage.setItem('token', token);
            setSuccessMessage('Login effettuato con successo!');
            setErrorMessage('');
        } catch (error) {
            console.error("Login error", error);
            setErrorMessage('Nome utente o password non corretti.');
            setSuccessMessage('');
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleLogin} className="login-form">
                <input 
                    type="text" 
                    placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username} 
                    required
                    className="login-input"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    required
                    className="login-input"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
