import React from "react";
import "./Offer.css";
import exclusive from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right"></div>
      <img src={exclusive} alt="" />
    </div>
  );
};

export default Offer;
