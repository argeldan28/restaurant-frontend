import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); // New state variable for email
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const handleRegister = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setErrorMessage("Le password non corrispondono.");
            return;
        }

        // Check password length
        if (password.length < 6) {
            setErrorMessage("La password deve contenere almeno 6 caratteri.");
            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
        if (!emailPattern.test(email)) {
            setErrorMessage("Email non valida.");
            return;
        }

        setLoading(true); // Start loading

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                username,
                email, // Include email in the request
                password
            });

            setSuccessMessage('Registrazione avvenuta con successo! Puoi ora effettuare il login.');
            setErrorMessage(''); // Reset error message

            // Reset fields
            setUsername('');
            setEmail(''); // Reset email field
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error("Error during registration", error);
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message || 'Si è verificato un errore durante la registrazione.'); // Show error message from server
            } else {
                setErrorMessage('Si è verificato un errore durante la registrazione.'); // Generic message
            }
            setSuccessMessage(''); // Reset success message
        } finally {
            setLoading(false); // End loading
        }
    }

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Registrazione</h2>
            {errorMessage && <p style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</p>} {/* Show error message */}
            {successMessage && <p style={{ color: 'green', fontSize: '12px' }}>{successMessage}</p>} {/* Show success message */}
            <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username} 
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
                />
                <input 
                    type="email" // Change input type to email
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
                />
                <input 
                    type="password" 
                    placeholder="Conferma Password" 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    value={confirmPassword} 
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
                />
                <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px' }}>
                    {loading ? 'Registrazione...' : 'Registrati'}
                </button>
            </form>
        </div>
    );
}

export default Register;
