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
    }, [currentIndex]);

    return (
        <div className="home-container">
            <h1>Benvenuto nel Ristorante!</h1>
            <p>Scopri i nostri piatti deliziosi e goditi un'esperienza culinaria unica.</p>
            
            {/* Carousel senza controlli manuali */}
            <div className="carousel">
                <img
                    src={images[currentIndex].src}
                    alt={`Slide ${currentIndex + 1}`}
                    className="carousel-image"
                />
                {/* Mostra il testo della didascalia se necessario */}
                {/* <p className="carousel-caption">{images[currentIndex].caption}</p> */}
            </div>
        </div>
    );
};

export default Home;
