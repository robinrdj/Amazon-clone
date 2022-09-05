import React from 'react';
import "./Subtotal.css";
import Checkbox from '@mui/material/Checkbox';
// import {addItem } from './counterSlice.js';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";


function Subtotalc() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const basketItems = useSelector((state) => state.counter.basket)
    const basketTotal = useSelector((state) => state.counter.total)
    // const dispatch = useDispatch();
   

  return (
    <div className="subtotal">
    <p className="subtotal__heading">Subtotal ({basketItems.length} items):${basketTotal}</p>
    <p className="subtotal__gift"> <Checkbox {...label} />This order contains a gift</p>
    {/* <button className="subtotal__button" onClick={navigate("/")}>Proceed to Checkout</button> */}
    {/* <button >Proceed to Checkout</button> */}
    <Link to="/payment" className='subtotal__proceed'> Proceed To Checkout</Link>
   
    </div>
  )
}

export default Subtotalc;