import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './ShopInfo.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const ShopInfo = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('product add');
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(pd => <Product
                        handleAddProduct={handleAddProduct}
                        product={pd}></Product>)
                }

            </div >
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div >
    );
};

export default ShopInfo;