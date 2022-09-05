import React from 'react';
import "./CheckoutProduct.css";
import {removeItem ,removeItemPrice} from './counterSlice.js';
import { useDispatch } from 'react-redux';

const ReviewCheckoutProduct = ({title,image,price,rating,id}) => {
    const dispatch = useDispatch();
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
       
         <button className="product__button" onClick={(event)=>{
          dispatch(removeItem({id:id}));
          dispatch(removeItemPrice({price:price}));
          event.preventDefault();

        }} >Remove From Basket</button>  
        
        <button className="product__button" onClick={(event)=>{
          dispatch(removeItem({id:id}));
          dispatch(removeItemPrice({price:price}));
          event.preventDefault();

        }} >Remove From Basket</button>  
        </div>
    </div>
  )
}

export default ReviewCheckoutProduct;