import React from 'react';
import "./Checkout.css"
import Ad from './images/chase.png';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src={Ad} alt="ad" className="checkout_ad" />
                <div>
                    <h4>Hello {user?.email}!</h4>
                    <h2 className="checkout_title">
                        Your Shopping Cart
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            item={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
