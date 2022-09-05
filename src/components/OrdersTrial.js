import React,{useState,useEffect} from 'react';
import {db} from "./firebase";
import "./Orders.css";
import Order from "./Order";
import {useSelector} from "react-redux";
import { getDocs, collection } from "firebase/firestore"; 


function OrdersTrial() {
    const [orders,setOrders] = useState([]);
    const user = useSelector((state) => state.counter.user);
  
useEffect(async ()=>{
  const querySnapshot = await getDocs(collection(db, "user", user.uid,"orders"));
  querySnapshot.forEach((doc) => {
    setOrders((prevValue)=>[...prevValue,doc.data()])
    console.log(doc.id, " => ", doc.data().basket);
  });
},[])

  return (
    <div className="orders__page">
    <h1>Your Orders</h1>
  <Order order={orders}/>
    </div> 
  )
}

export default OrdersTrial;