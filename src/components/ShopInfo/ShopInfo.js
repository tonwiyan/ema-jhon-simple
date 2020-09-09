import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './ShopInfo.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const ShopInfo = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('product add');
        const newCart = [...cart, product]
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="twin-container">
            <div className="product-container">

                {
                    products.map(pd => <Product
                        key={pd.key}
                        showAddToCart={true}
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