import React from 'react';
import { useSelector } from 'react-redux';

function Cart(props) {
    const cart = useSelector(state => state.Cart)
    console.log(cart);
    return (
        <div>
           <h2>{cart.fruite}</h2>
           <h3>{cart.price}</h3>
           <h4>{cart.description}</h4>
        </div>
    );
}

export default Cart;