import React from 'react';
<<<<<<< HEAD
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket },dispatch] = useStateValue();

    const removeFromBasket = ()=> {
        dispatch ({
            type : 'REMOVE_FROM_BASKET',
            id: id,
=======
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket}, dispatch] = useStateValue();
    const removeFromBasket =() => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
        })

    }

<<<<<<< HEAD
  return (
    <div className='checkoutProduct'>
        <img 
        className='checkoutProduct'
        src={image}
        />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}
            </p>
            <p className='checkoutProduct__price'>{price}
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating)
                .fill()
                .map((_, i) =>(
                <p>⭐ </p>
                ))}
            </div>
            <button onClick={removeFromBasket}> Remove from bas</button>

        </div>

        
=======
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
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
    </div>
  )
}

<<<<<<< HEAD
export default CheckoutProduct
=======
export default CheckoutProduct;
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
