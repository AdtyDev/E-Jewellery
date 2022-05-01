import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function header() {
  return (
    <div className='header'>
        <img 
        className="header__logo"
        src="https://i.pinimg.com/736x/f6/86/26/f686267024964788c16cc51d91fe6073--logo-s-logo-branding.jpg"/>
        <div className="header__search">
            <input
            className="header__searchInput"
            type="text"/>
            <SearchIcon
            className="header__searchIcon" />
            
        </div>

        <div className="header__nav">
            
            <div className='header__option'> 
                <span className='header__optionLineOne'>
                Hello Aditya </span>
                <span className='header__optionLineTwo'>
                Sign In</span>
            </div>

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

            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
    
                <span className='header__optionLineTwo 
                header__basketCount'>
                 0</span>
            </div>


        </div>
    </div>
  )
}

export default header