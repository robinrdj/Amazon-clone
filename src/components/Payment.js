import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux";
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {emptyBasket } from './counterSlice.js';
import {db} from "./firestoreprep.js";
import { doc, setDoc,} from "firebase/firestore"; 


const Payment = () => {
    const user = useSelector((state) => state.counter.user);
    const basketItems = useSelector((state) => state.counter.basket);
    const Total = useSelector((state) => state.counter.total);
    const navigate  = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(null);
    const [time, setTime] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'   '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        setTime(date);
    },[basketItems])

   const handleSubmit = async (event)=>{
    event.preventDefault();
    setProcessing(true);
    setDoc(doc(db, "user",user?.uid,"orders",time), {
    basket:basketItems,
    amount:Total,
    Date:time
  });
    
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch(emptyBasket());
      navigate("/orders");

   }

   const handleChange = (event)=>{
    setDisabled(event.empty);
    setError(event.error?event.error.message:" ")
    
   }

  return (
    <div className='Payment'>
    <h1>Chekout {basketItems.length} items</h1>
      <div className='payment__container'>
         <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
               <p>{user?.email}</p>
               <p>123, React Lane</p>
               <p>Los Angeles, CA</p>
            </div>
         </div>
         <div className='payment__section'>
            <div className="payment__title">
              <h3>Review Item and Delivery</h3>
            </div>
            <div className='payment__items'>
            {basketItems.map((item)=>{
           return <CheckoutProduct title={item.title} image={item.image} price={item.price} rating={item.rating} id={item.id} hideButton={false}/>
      })}
            </div>
         </div>
         <div className='payment__section'>
            <div className="payment__method">
              <h3>Payment Method</h3>
            </div>
            <div className='payment__details'>
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div>Order Total: $ {Total}</div>
           
              {user ? <button disabled={processing||disabled||succeeded}> <span>{processing?<p>Processing</p>:"Buy Now"}</span></button>:<h2>Kindly login to proceed further</h2>} 
                {error && <div>{error}</div>}
              </form>    
            </div>
         </div>
      </div>
    </div>
  )
}

export default Payment;