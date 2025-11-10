import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    
    // Calculate total items and remaining capacity
    const CART_LIMIT = 20;
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const remainingCapacity = CART_LIMIT - totalItems;

    // Calculate progress percentage
    const progressPercentage = (totalItems / CART_LIMIT) * 100;

    if (cartItems.length === 0) {
        return (
            <div className="cart-container">
                <h2>Your Cart</h2>
                <p>Your cart is empty</p>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            
            {/* Cart Capacity Indicator */}
            <div className="cart-capacity">
                <div className="capacity-bar">
                    <div 
                        className="capacity-progress" 
                        style={{ 
                            width: `${progressPercentage}%`,
                            backgroundColor: progressPercentage >= 90 ? '#dc2626' : 
                                          progressPercentage >= 75 ? '#f59e0b' : '#22c55e'
                        }}
                    ></div>
                </div>
                <div className="capacity-text">
                    {remainingCapacity === 0 ? (
                        <span className="capacity-warning">Cart limit reached (20 books maximum)</span>
                    ) : (
                        <span>Books in cart: {totalItems} / {CART_LIMIT} (Space for {remainingCapacity} more)</span>
                    )}
                </div>
            </div>

            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.title} className="cart-item">
                        <img src={item.img} alt={item.title} />
                        <div className="cart-item-details">
                            <h3>{item.title}</h3>
                            <p>Price: ₹{item.price}</p>
                            <div className="cart-item-controls">
                                <button 
                                    onClick={() => updateQuantity(item.title, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button 
                                    onClick={() => updateQuantity(item.title, item.quantity + 1)}
                                >
                                    +
                                </button>
                                <button 
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.title)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div className="cart-item-total">
                            ₹{item.price * item.quantity}
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ₹{cartTotal}</h3>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default Cart;