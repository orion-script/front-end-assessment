import React from "react";
import Image from "next/image";
import Logos from "../../assets/Meubel-House_Logos-05.png";
import { ArrowrightIcon } from "../../components/SVG";
import "./cartHero.scss";

function CartHero() {
  return (
    <div className="hero-container">
      <Image src={Logos} className="image" alt="Meubel House" />
      <h1>Cart</h1>
      <div className="text-container">
        <p className="text">Home</p>
        <ArrowrightIcon />
        <p className="text">Cart</p>
      </div>
    </div>
  );
}

export default CartHero;
