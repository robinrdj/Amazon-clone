import React from "react";
import "./Home.css";
import Product from "./Product.js"

function Home(){
    return(
    <div className="home"> 
    <div className="home__container">
    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg" 
    alt="amazon" />
   
    <div className="row">
    <Product  title="The Lean Startup " id={1}
    price={19.99}
    image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY327_FMwebp_QL65_.jpg"
    rating={5} />
    <Product title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal " id={2}
    price={58}
    image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY327_FMwebp_QL65_.jpg"
    rating={5} />
    </div>

    <div className="row">
    <Product title="Realme Watch 2, Smart Watch for Android and iOS Phones Compatible iPhone Samsung, IP68 Smartwatch Fitness Tracker with Heart Rate Monitor, Blood Oxygen, Pedometer, Sleep Monitor, 90 Sports Modes " id={3}
    price={49}
    image="https://m.media-amazon.com/images/I/61uB6scVuKL._AC_UY327_FMwebp_QL65_.jpg"
    rating={4} />
    <Product title="Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote " id={4}
    price={28}
    image="https://m.media-amazon.com/images/I/717dWfmxXVL._AC_SX466_.jpg"
    rating={5}/>
    <Product title="Apple iPad Pro (128GB, Wi-Fi, Gold) 12.9in Tablet (Renewed)" id={5}
    price={399}
    image="https://m.media-amazon.com/images/I/91xk0o++tdL._AC_UY327_FMwebp_QL65_.jpg"
    rating={4}/>
    </div>
    
    <div className="row">
    <Product title="Computer Speakers, Dynamic RGB Computer Sound Bar, HiFi Stereo Bluetooth 5.0 & 3.5mm Aux-in Connection, USB Powered Computer Speakers for Desktop, PC, Laptop, Tablets" id={6}
    price={53}
    image="https://m.media-amazon.com/images/I/61NnjHlWekL._AC_UY327_FMwebp_QL65_.jpg"
    rating={5} />
    </div>

    </div>
    </div>);
}

export default Home;