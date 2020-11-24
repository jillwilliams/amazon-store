import React from 'react';
import './Product.css';
import Mulan from './images/mulan.png';


function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p className="flame">🍁</p>
                    ))}
                </div>
            </div>
            <img src={image} alt=" " />
            <button className="product_button" type="submit">
                Add to Cart
            </button>
        </div>
    );
}

export default Product;
