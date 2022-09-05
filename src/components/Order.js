import React from 'react';
import "./Order.css";
import CheckoutProduct from './CheckoutProduct';

function Order({order}) {
   
  return (
    <div className="order">
    <h2>Orders</h2>
    <p className='order__id'> <small>{order.id}</small> </p>
    {order.map(item=>{
        return(
        <div className="checkout__layout">
           <p>{item.Date}</p>
        {item.basket.map(ite=>{
          return <CheckoutProduct title={item.basket[0].title} image={item.basket[0].image} price={item.basket[0].price} rating={item.basket[0].rating} id={item.basket[0].id} hideButton={false}/>
        })}
        </div>)
    })     
    } 
    </div>
  )
}

export default Order;