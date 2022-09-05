import React from 'react';
import "./Product.css";
import {addItem } from './counterSlice.js';
import { useDispatch } from 'react-redux';

function Product({title,image,price,rating,id}) {

  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="product__info">
     
        <p>{title}</p>
       <p className="product__price"> 
          <small>$</small>
          <strong>{price}</strong>
         </p> 
         <div className="rating">
         {Array(rating).fill().map((_,i)=>{
          return <p>⭐</p>
         })}
         </div>
  
        <div className="product__image__center">
        <img className="product__image" src={image} alt="book_img" />
        </div>
        <div className="button">
        <button className="product__button" onClick={()=>{
          dispatch(addItem({title:title,image:image,price:price,rating:rating,id:id}))

        }} >Add To Basket</button>
        </div>
      </div>
    </div>
  )
}

export default Product;