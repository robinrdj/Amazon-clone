import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useState, } from "react";
import "./Login.css";
import {auth} from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const signin = async ()=>{
        try{
            const user = await signInWithEmailAndPassword(auth,email,password);
            console.log(user);
            console.log("SUCCESS");
            navigate('/');
        }catch(error){
            console.log("FAILURE");
            console.log(error.message);
        }
}

    const register = async ()=>{
        try{
            const user = await createUserWithEmailAndPassword(auth,email,password);
            console.log(user);
            console.log("SUCCESS");
            navigate('/');
        }catch(error){
            console.log("FAILURE");
            console.log(error.message);
        }
    }

  return (
    <div className="login">
    <Link to="/">
    <img className = "login__image" src="https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg" alt="Amazon_logo" />
    </Link>
    <div className="login__box">
    <h3>E-mail</h3>
    <input type="text" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} />
    <h3>Password</h3>
    <input type="password" value={password}  name="password" onChange={(e)=>setPassword(e.target.value)} />
    <button className="login__signin__button" onClick={signin}>SignIn</button>
    <p>By signing in, you agree to the AMAZON CLONE Conditions of use and sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
    <button className="login__createAccount__button" onClick={register}>Create Amazon Account</button>
    </div>
    </div>
    
  )
}

export default Login