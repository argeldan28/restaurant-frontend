import React from 'react';
import './Menu.css'; // Import CSS for styling

const Menu = () => {
    const dishes = [
        {
            id: 1,
            name: 'Spaghetti Carbonara',
            description: 'Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
            price: 12.99,
            image: 'https://images.unsplash.com/photo-1573070817067-aeedc15c36dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id: 2,
            name: 'Margherita Pizza',
            description: 'A simple pizza topped with tomato sauce, fresh mozzarella, and basil.',
            price: 10.99,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphJTIwbWFyZ2hlcml0YXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id: 3,
            name: 'Caesar Salad',
            description: 'Crisp romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.',
            price: 8.99,
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENhZXNhciUyMFNhbGFkfGVufDB8fDB8fHww',
        },
        {
            id: 4,
            name: 'Tiramisu',
            description: 'A classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.',
            price: 6.99,
            image: 'https://images.unsplash.com/photo-1712262582493-01aa9ec5c7f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D',
        },
    ];

    return (
        <div className="menu-container">
            <h2>Menu</h2>
            <ul className="menu-list">
                {dishes.map(dish => (
                    <li key={dish.id} className="menu-item">
                        <img src={dish.image} alt={dish.name} className="menu-image" />
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                        <p className="menu-price" style={{color:'green'}}>${dish.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
