import React from 'react';
import "./Checkout.css";
import Subtotalc from "./Subtotalc.js"
import CheckoutProduct from "./CheckoutProduct.js"
import { useSelector } from 'react-redux';

function Checkout() {
    const basketItems = useSelector((state) => state.counter.basket)
  return (
    <div>
    <div className="checkout">
      <div className="checkout__left">
        <img className='checkout__ad' src="https://1xhxs734on5g2xk8dq425lw4-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/Amazon-Fresh-Ad-768x337.jpg" alt="amazon-ad"  />

      <p>Your items in the basket will come here</p>
      {basketItems.map((item)=>{
           return <CheckoutProduct title={item.title} image={item.image} price={item.price} rating={item.rating} id={item.id} hideButton={true}/>
      })}
   
      </div>
      <div className="checkout__right" >
        <Subtotalc />
      </div>
    </div>
    </div>
  )
}

export default Checkout;