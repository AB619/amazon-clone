import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(({ id, title, price, image, rating }, ref) => {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div ref={ref} className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="productImage" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
});

export default CheckoutProduct;