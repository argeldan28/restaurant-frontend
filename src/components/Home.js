import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link se stai usando react-router per la navigazione
import './Home.css'; // Importa eventuale file di stile

const Home = () => {
    return (
        <div className="home-container" style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Benvenuto nel Ristorante!</h1>
            <p>Scopri i nostri piatti deliziosi e goditi un'esperienza culinaria unica.</p>
            
            <img 
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg0NzN8MHwxfGFsbHwxfHx8fHx8fHwxNjA2NzY2NTEz&ixlib=rb-1.2.1&q=80&w=400" 
                alt="Ristorante" 
                style={{ width: '300px', height: 'auto', borderRadius: '10px', margin: '20px 0' }} 
            />

            <div className="action-links" style={{ margin: '20px 0' }}>
                <Link to="/register">
                    <button style={{ padding: '10px 20px', margin: '5px' }}>Registrati</button>
                </Link>
                <Link to="/login">
                    <button style={{ padding: '10px 20px', margin: '5px' }}>Login</button>
                </Link>
            </div>

            <footer style={{ marginTop: '40px', fontSize: '14px', color: '#555' }}>
                <p>&copy; {new Date().getFullYear()} Ristorante. Tutti i diritti riservati.</p>
            </footer>
        </div>
    );
}

export default Home;