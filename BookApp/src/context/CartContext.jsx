import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const CART_LIMIT = 20;

    const getTotalItems = (items) => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    const addToCart = (book, quantity) => {
        setCartItems(prevItems => {
            const currentTotal = getTotalItems(prevItems);
            const existingItem = prevItems.find(item => item.title === book.title);
            
            if (currentTotal + quantity > CART_LIMIT) {
                const remaining = CART_LIMIT - currentTotal;
                if (remaining <= 0) {
                    alert('Cart limit reached (20 books maximum)');
                    return prevItems;
                }
                quantity = remaining;
                alert(`Only added ${remaining} books due to cart limit of 20`);
            }

            if (existingItem) {
                return prevItems.map(item =>
                    item.title === book.title
                        ? { ...item, quantity: Math.min(item.quantity + quantity, CART_LIMIT) }
                        : item
                );
            }
            return [...prevItems, { ...book, quantity }];
        });
    };

    const removeFromCart = (bookTitle) => {
        setCartItems(prevItems => prevItems.filter(item => item.title !== bookTitle));
    };

    const updateQuantity = (bookTitle, newQuantity) => {
        setCartItems(prevItems => {
            if (newQuantity <= 0) {
                return prevItems.filter(item => item.title !== bookTitle);
            }

            // Calculate the total items excluding the current item
            const otherItemsTotal = prevItems.reduce((total, item) => 
                item.title === bookTitle ? total : total + item.quantity, 0);
            
            // Check if the new quantity would exceed the cart limit
            if (otherItemsTotal + newQuantity > CART_LIMIT) {
                const remaining = CART_LIMIT - otherItemsTotal;
                if (remaining <= 0) {
                    alert('Cart limit reached (20 books maximum)');
                    return prevItems;
                }
                alert(`Can only set quantity to ${remaining} due to cart limit of 20`);
                newQuantity = remaining;
            }

            return prevItems.map(item =>
                item.title === bookTitle ? { ...item, quantity: newQuantity } : item
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