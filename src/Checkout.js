import { ListItem } from "@mui/material";
import React from "react";
import "./Checkout.css";
<<<<<<< HEAD
=======
import CheckoutProduct from "./CheckoutProduct";
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
<<<<<<< HEAD
  const [{ basket, user },dispatch] = useStateValue();
  
=======
  const [{ basket}, dispatch] = useStateValue();
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
  return (
    <div className="checkout">
        <div 
        className="checkout__left">
        <img 
        className='checkout__ad'
        src="https://art.usc.edu/intermedia/images/checkout-banner.png"
        alt=""
        />

        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout__title">
            Your Shopping Cart
          </h2>

          {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
<<<<<<< HEAD
            rating={item.rating} 
=======
            rating={item.rating}
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
            />
          ))}

          {/* CheckoutProduct */}
<<<<<<< HEAD
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
=======
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01

        </div>
        </div>

        <div className="checkout__right">
         <Subtotal />
         
        </div>
    </div>
  )
}

export default Checkout