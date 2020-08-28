import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((totalPrice, prd) => totalPrice + prd.price, 0);

    // let totalPrice = 0;
    // for (let i; i < cart.length; i++) {
    //     const product = cart[i];
    //     totalPrice = totalPrice + product.price;
    // }

    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }
    if (totalPrice > 35) {
        shipping = 4.99;
    }
    else if (totalPrice > 15) {
        shipping = 12.99
    }

    const tax = (totalPrice / 10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax).toFixed(2));

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product price:{formatNumber(totalPrice)}</p>
            <p><small>shippingCost: {shipping}</small></p>
            <p><small>tax+vat:{tax}</small></p>
            <p>totalPrice price: {totalPrice + shipping}</p>
        </div>
    );
};

export default Cart;