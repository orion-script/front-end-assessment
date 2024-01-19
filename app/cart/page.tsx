"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import CartHero from "@/components/cartHero/CartHero";
import Footer from "@/components/footer/Footer";
import Delivery from "@/components/delivery/Delivery";
import "./cart.scss";

function Page() {
  const cartItems = useSelector((state: any) => state.cart);

  const total = cartItems?.reduce((acc: any, item: any) => {
    return acc + item.price * item.qty;
  }, 0);

  console.log("CARTITEMS", cartItems);

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
            {cartItems.map((item: any) => (
              <div key={item.id} className="product">
                <div className="image">
                  <Image
                    src={item.image}
                    alt=""
                    width={50}
                    height={50}
                    className="cart-image"
                  />
                  <p className="name">{item.title}</p>
                </div>

                <p className="price">Rs. {item.price}</p>
                <p className="quantity">{item.qty}</p>
                <p className="subtotal">Rs. {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-details-right">
          <h1>Cart Totals</h1>
          <div className="subtotal-container">
            <p className="text">Subtotal</p>
            <p className="subtotal">Rs. {total}</p>
          </div>
          <div className="total-container">
            <p className="text">Total</p>
            <p className="total">Rs. {total}</p>
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
