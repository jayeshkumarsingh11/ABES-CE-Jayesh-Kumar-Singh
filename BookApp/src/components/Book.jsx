import React, { useState } from 'react'
import './book.css'
function Book(props) {

    const [count, setCount] = useState(0)
    function increment() {
        if (count>=10) return;
        setCount(count + 1)
    }

    function decrement() {
        if (count<=0) return;
        setCount(count - 1)
    }
    return (
        <div id="book">
            <img src={props.img} alt="" height={170} width={170} />
            <h1>Title:{props.title}</h1>
            <h1>Price:{props.price}</h1>

            <div>
                <button onClick={increment} disabled={count >= 10}>+</button>
                <span>{count}</span>
                <button onClick={decrement} disabled={count <= 0}>-</button>
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
    )
}

export default Book;