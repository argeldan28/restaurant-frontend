import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: "pizza.jpg",
            caption: "Offerta 1: Un delizioso piatto di pasta per iniziare la tua esperienza!"
        },
        {
            src: "drink.jpg",
            caption: "Offerta 2: Scopri la nostra pizza fresca e gustosa!"
        },
        {
            src: "burger.jpg",
            caption: "Offerta 3: Non perdere il nostro delizioso dessert!"
        }
    ];

    // Funzione per avanzare automaticamente all'immagine successiva
    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    // Effetto per auto-play del carosello
    useEffect(() => {
        const interval = setInterval(nextImage, 3000); // Cambia immagine ogni 3 secondi
        return () => clearInterval(interval); // Pulisci l'intervallo quando il componente viene smontato
    }, [nextImage]); // Aggiungi `nextImage` come dipendenza

    return (
        <div className="home-container">
            {/* <h1>Benvenuto nel Ristorante!</h1>
            <p>Scopri i nostri piatti deliziosi e goditi un'esperienza culinaria unica.</p> */}
            <img src='top.jpg' className='top-img'/>
            
            {/* Div per il carosello e il testo, posizionati in una riga */}
            <div className="carousel-and-info">
                <div className="carousel">
                    <img
                        src={images[currentIndex].src}
                        alt={`Slide ${currentIndex + 1}`}
                        className="carousel-image"
                    />
                </div>
                
                <div className="info-text">
                    <p>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <br />
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            <div className='second-img'>
                <img src='spaghetti.jpg' alt='Spaghetti'></img>
            </div>

        </div>
    );
};

export default Home;
