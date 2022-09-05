import React from 'react';
import "./CheckoutProduct.css";
import {removeItem ,removeItemPrice} from './counterSlice.js';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";

const CheckoutProduct = ({title,image,price,rating,id,hideButton}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div className="checkoutProduct">
    <div className="checkoutproduct__image">
    <img className="product__image" src={image} alt="book_img" />
    </div>
    <div className="product__details">
     <p>{title}</p>
       <p className="product__price"> 
          <small>$</small>
          <strong>{price}</strong>
         </p> 
       
       {hideButton &&  <button className="product__button" onClick={(event)=>{
          dispatch(removeItem({id:id}));
          dispatch(removeItemPrice({price:price}));
          navigate("/checkout");
        }} >Remove From Basket</button>}
        
        </div>
    </div>
  )
}

export default CheckoutProduct