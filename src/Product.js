import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            },
        });
    }
    return (
        <div className="product">
            {/*
            Info
            Price
            Ratings
            Image
            Button */}
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img className="product__image"
                src={image}
                alt={title} />
            <button onClick={addToBasket} className="product__button">Add to Basket</button>
        </div>
    )
};

export default Product;