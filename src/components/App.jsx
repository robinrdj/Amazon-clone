import React,{useEffect} from "react";
// import Home from "./Home";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login.js";
import Payment from "./Payment";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {auth} from "./firebase.js";
import {updateUser } from './counterSlice.js';
import { useDispatch } from 'react-redux';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import OrdersTrial from "./OrdersTrial";
const promise = loadStripe(process.env.REACT_APP_STRIPE_PROMISE);

function App() {
const dispatch = useDispatch();

     useEffect(()=>{
        auth.onAuthStateChanged(authUser=>{
         console.log("the user is ", authUser);
         if(authUser){
            // the user is logged in 
            dispatch(updateUser({user:authUser}));
         }
         else{
            //the user is logged out
            dispatch(updateUser({user:null}));
         }
        })
     })

  return (
   <div>
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<div><Header /><Home /></div>} />
         <Route path="/checkout" element={<div><Header /><Checkout /></div>} />
         <Route path="/login" element={<div><Login /></div>} />
         <Route path="/orders" element={<div><Header /><OrdersTrial /></div>} />

         <Route path="/payment" element={<div>
            <Header />
         <Elements stripe={promise}>
         <Payment />
         </Elements>
         </div>} />
      </Routes>
   </BrowserRouter>
   </div>
  ); 
}

export default App;
