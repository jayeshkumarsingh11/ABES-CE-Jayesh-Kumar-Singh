import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import './book.css'

function Book(props) {
    const [count, setCount] = useState(0)
    const { addToCart, cartItems } = useCart()

    // Calculate total items in cart
    const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);
    const remainingCapacity = 20 - cartTotal;

    function increment() {
        if (count >= Math.min(10, remainingCapacity)) return;
        setCount(count + 1)
    }

    function decrement() {
        if (count <= 0) return;
        setCount(count - 1)
    }

    function handleAddToCart() {
        if (count > 0) {
            addToCart({
                title: props.title,
                price: Number(props.price),
                img: props.img
            }, count);
            setCount(0); // Reset count after adding to cart
        }
    }

    return (
        <div id="book">
            <img src={props.img} alt="" height={170} width={170} />
            <h1>Title:{props.title}</h1>
            <h1>Price:₹{props.price}</h1>

            <div className="book-controls">
                <div className="quantity-controls">
                    <button 
                        onClick={increment} 
                        disabled={count >= Math.min(10, remainingCapacity)}
                        title={remainingCapacity === 0 ? "Cart limit reached (20 books)" : ""}
                    >
                        +
                    </button>
                    <span>{count}</span>
                    <button 
                        onClick={decrement} 
                        disabled={count <= 0}
                    >
                        -
                    </button>
                </div>
                {remainingCapacity > 0 ? (
                    <button 
                        className="add-to-cart-btn" 
                        onClick={handleAddToCart}
                        disabled={count === 0}
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div className="cart-limit-warning">
                        Cart limit reached (20 books)
                    </div>
                )}
                {remainingCapacity > 0 && remainingCapacity < 5 && (
                    <div className="cart-capacity-warning">
                        Only {remainingCapacity} more can be added
                    </div>
                )}
            </div>
        </div>
    )
}

export default Book;