import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.title === book.title);
            if (existingItem) {
                return prevItems.map(item =>
                    item.title === book.title
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevItems, { ...book, quantity }];
        });
    };

    const removeFromCart = (bookTitle) => {
        setCartItems(prevItems => prevItems.filter(item => item.title !== bookTitle));
    };

    const updateQuantity = (bookTitle, quantity) => {
        setCartItems(prevItems => {
            if (quantity <= 0) {
                return prevItems.filter(item => item.title !== bookTitle);
            }
            return prevItems.map(item =>
                item.title === bookTitle ? { ...item, quantity } : item
            );
        });
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartTotal,
            itemCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}