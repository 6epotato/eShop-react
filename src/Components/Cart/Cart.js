import React from 'react';

const Cart = (props) => {
    const { cart } = props
    return (
        <div>
            <h3>Order Summery </h3>
            <p>selected item = {cart.length}</p>
        </div>
    );
};

export default Cart;