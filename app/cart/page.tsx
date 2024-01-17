import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import CartHero from "@/components/cartHero/CartHero";
import Footer from "@/components/footer/Footer";
import Delivery from "@/components/delivery/Delivery";
import prodoctimage from "../../assets/play.png";
import "./cart.scss";

function Page() {
  return (
    <div className="cart-container">
      <Navbar />
      <CartHero />
      <div className="cart-details-container">
        <div className="cart-details-left">
          <div className="heading">
            <p className="text">Product</p>
            <p className="text">Price</p>
            <p className="text">Quantity</p>
            <p className="text">Subtotal</p>
          </div>
          <div className="product-container">
            <div className="product">
              <div className="image">
                <Image src={prodoctimage} alt="product" />
                <p className="name">Asgaard sofa</p>
              </div>
              <p className="price">Rs. 250,000.00</p>
              <p className="quantity">1</p>
              <p className="subtotal">Rs. 250,000.00</p>
            </div>
            <div className="product">
              <div className="image">
                <Image src={prodoctimage} alt="product" />
                <p className="name">Asgaard sofa</p>
              </div>
              <p className="price">Rs. 250,000.00</p>
              <p className="quantity">1</p>
              <p className="subtotal">Rs. 250,000.00</p>
            </div>
          </div>
        </div>
        <div className="cart-details-right">
          <h1>Cart Totals</h1>
          <div className="subtotal-container">
            <p className="text">Subtotal</p>
            <p className="subtotal">Rs. 250,000.00</p>
          </div>
          <div className="total-container">
            <p className="text">Total</p>
            <p className="total">Rs. 250,000.00</p>
          </div>
          <Link href="/checkout" className="checkout-btn">
            <button className="button">Checkout</button>
          </Link>
        </div>
      </div>
      <Delivery />
      <Footer />
    </div>
  );
}

export default Page;
