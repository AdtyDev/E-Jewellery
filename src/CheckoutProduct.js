import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket}, dispatch] = useStateValue();
    const removeFromBasket =() => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
        })

    }

    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' 
        src={image} />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProdcut__rating'>
                {Array (rating).fill().map((_, i) => (<p>⭐</p>))}
            </div>
            <button onClick={removeFromBasket}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct;