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
        {
            id: 5,
            name: 'Lasagna',
            description: 'Layered pasta with rich meat sauce, béchamel, and melted cheese.',
            price: 13.99,
            image: 'https://images.unsplash.com/photo-1604909053747-7971fa71cf2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzYWduYXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id: 6,
            name: 'Fettuccine Alfredo',
            description: 'Creamy pasta dish made with fettuccine noodles, butter, and Parmesan cheese.',
            price: 11.99,
            image: 'https://images.unsplash.com/photo-1591375275342-e7890bfc3c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmV0dHVjY2luZSUyMGFscmVkbyUyMHBhc3RhJXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id: 7,
            name: 'Ravioli',
            description: 'Handmade pasta filled with ricotta cheese and served in marinara sauce.',
            price: 14.99,
            image: 'https://images.unsplash.com/photo-1589760987558-0626d6cabe13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmF2aW9saXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id: 8,
            name: 'Bruschetta',
            description: 'Grilled bread rubbed with garlic and topped with diced tomatoes and basil.',
            price: 5.99,
            image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJ1c2NoZXR0YXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            id: 9,
            name: 'Caprese Salad',
            description: 'A fresh salad of tomatoes, mozzarella, and basil, drizzled with olive oil.',
            price: 9.99,
            image: 'https://images.unsplash.com/photo-1613415224944-9e884a871bac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FwcmVzZSUyMFNhbGFkfGVufDB8fDB8fHww',
        },
        {
            id: 10,
            name: 'Risotto ai Funghi',
            description: 'Creamy Arborio rice dish made with porcini mushrooms and Parmesan cheese.',
            price: 12.49,
            image: 'https://images.unsplash.com/photo-1543353071-087092ec393b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpc290dG98ZW58MHx8MHx8fDA%3D',
        }
        
     
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
