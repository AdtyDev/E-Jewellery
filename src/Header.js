import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";



function Header() {
const [{ basket },dispatch] = useStateValue();
 

  return (
    <div className='header'>
        
        <Link to ="/">
         <img 
        className="header__logo"
        src="https://mpng.subpng.com/20180512/ive/kisspng-janet-mockler-jewellery-store-logo-5af78a8cbe0d79.1061652415261723007785.jpg"/>
        </Link>
       

        <div className="header__search">
            <input
            className="header__searchInput"
            type="text"/>
            <SearchIcon
            className="header__searchIcon" />
            
        </div>

        <div className="header__nav">
            <Link to="/login">
            <div className='header__option'> 
                <span className='header__optionLineOne'>
                Hello Aditya </span>
                <span className='header__optionLineTwo'>
                Sign In</span>
            </div>

            </Link>
            
            <div className='header__option'> 
                <span className='header__optionLineOne'>
                 Return </span>
                <span className='header__optionLineTwo'>
                 & Order</span>
            </div>

            <div className='header__option'> 
                <span className='header__optionLineOne'>
                Your</span>
                <span className='header__optionLineTwo'>
                prime</span>
            </div>

            <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
    
                <span className='header__optionLineTwo 
                header__basketCount'>
                 {basket?.length}
                 </span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header;