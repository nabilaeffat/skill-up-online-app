import React from 'react';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    return (
        <div>
            <h4>Enrollment Summary</h4>
            <p>Total Enrolled Course: {cart.length}</p>
            <p>Total Price: {total.toFixed(2)}</p>
            <Button variant="dark">Review</Button>
        </div>
    );
};

export default Cart;