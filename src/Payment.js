import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';
import { Link } from 'react-router-dom';

const Payment = () => {

    const [{ basket, user }] = useStateValue();
    return (
        <div className="payment">

            <div className='payment__container'>
                <h1>
                    Checkout {<Link to="/checkout">{basket?.length} items</Link>}
                </h1>
                {/*address*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Addess</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>City - State - Country</p>
                    </div>
                </div>
                {/*review items*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        <FlipMove>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </FlipMove>
                    </div>
                </div>

                {/*payment method*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/*Stripe JS implementation*/}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;