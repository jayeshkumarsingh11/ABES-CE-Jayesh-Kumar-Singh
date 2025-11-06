import React from 'react'
import './book.css'
function Book(props) {
    return (
        <div id="book">
            <img src="https://m.media-amazon.com/images/I/91p5RF8nPFL._AC_UF1000,1000_QL80_.jpg" alt="" height={100} width={100} />
            <h1>Title:{props.title}</h1>
            <h1>Price:{props.price}</h1>
            <div>
                <button>+</button>
                <span>0</span>
                <button>-</button>
            </div>
        </div>
    )
}

export default Book;