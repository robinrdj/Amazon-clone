import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { auth } from './firebase';
function Header() {
  const basketItems = useSelector((state) => state.counter.basket)
  const user = useSelector((state) => state.counter.user)

  function handleAuthentication(){
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className = "header">
     <Link to="/"> 
       <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"  />
    </Link>
    <div className="header-search"> 
    <input className="header-search-input" type= "text"/>
    <SearchIcon className="header-search-icon" />
    </div>

    <div className="header-nav">
      <div className="header-option"> 
      <span className="header-option-one">hello {user?user.email: "Guest"}</span>
      
      <Link to={!user && "/login"}>
      <div onClick={handleAuthentication}>
      <span className="header-option-two sign">{user ? "Sign Out":"Sign In"} </span>
      </div>
      </Link>
     
      </div>

      <Link to="/orders">
      <div className="header-option"> 
      <span className="header-option-one"t> Returns</span>
      <span className="header-option-two"> & Orders</span>
      </div>
      </Link>

      <div className="header-option"> 
      <span className="header-option-one"> Your</span>
      <span className="header-option-two"> Prime</span>
      </div>
      <Link to="/checkout">
      <div className="header-option-basket">
      <ShoppingBasketIcon className='basketIcon'/>
      <span className="header-basket-count">{basketItems.length}</span>
      </div>
      </Link>
      

    </div>
    </div>

  )
}

export default Header;




