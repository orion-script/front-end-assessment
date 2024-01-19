"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import {
  FavoriteIcon,
  ProfileIcon,
  SearchIcon,
  CartIcon,
  MenuOpenIcon,
  MenuCloseIcon,
  DropDownCloseIcon,
  ClearCart,
} from "../SVG";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";
import "./navbar.scss";

interface CartItem {
  id: string;
  title: string;
  price: number;
  qty: number;
  image: string;
}

function Navbar() {
  const dispatch = useDispatch();
  const [navbar, setNavbar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cartItems: CartItem[] = useSelector((state: any) => state.cart) || [];

  useEffect(() => {
    navbar && screen.width < 480
      ? document.body.classList.add("fixed")
      : document.body.classList.remove("fixed");
  }, [navbar]);

  const navClose = () => {
    setNavbar(!navbar);
  };

  const closeDropdown = (e: any) => {
    e.preventDefault();
    setDropdownOpen(false);
    document.body.classList.add("none");
  };

  const openDropdown = (e: any) => {
    e.preventDefault();
    setDropdownOpen(true);
    document.body.classList.remove("none");
  };

  const handleClearCart = (productId: string) => {
    // Dispatch an action to clear the cart
    dispatch(removeFromCart(productId));
  };

  // Calculate total price based on items in the cart
  const total = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    : 0;

  return (
    <nav>
      {/* dropdown start */}
      <div className={`dropdown-container ${dropdownOpen ? "open" : "close"}`}>
        <div className="dropdown-heading">
          <h1>Shopping Cart</h1>
          <a href="" onClick={closeDropdown}>
            <DropDownCloseIcon />
          </a>
        </div>
        <div className="horizontal-line-container">
          <hr className="horizontal-line" />
        </div>

        <div className="cart-items-container">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-items">
              <Image
                src={item.image}
                alt=""
                width={50}
                height={50}
                className="cart-image"
              />
              <div className="products">
                <p className="title">{item.title}</p>
                <div className="products-text">
                  <p className="qty"> {item.qty}</p>
                  <p className="x">x</p>
                  <p className="price">Rs. {item.price}</p>
                </div>
              </div>

              <div
                className="clear-cart"
                onClick={() => handleClearCart(item.id)}
              >
                <ClearCart />
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <p className="text">Subtotal</p>
          <p className="number">Rs. {total}</p>
        </div>
        <hr className="hr" />
        <div className="buttons-container">
          <Link href="/cart" className="cart-btn">
            <button className="button">View Cart</button>
          </Link>
          <Link href="/checkout" className="checkout-btn">
            <button className="button">Checkout</button>
          </Link>
        </div>
      </div>
      {/* dropdown ends */}
      <div className="logo-container"></div>
      {/* HAMBURGER BUTTON FOR MOBILE */}
      <div className="menuicon-container">
        <button className="icon-button" onClick={navClose}>
          {navbar ? <MenuCloseIcon /> : <MenuOpenIcon />}
        </button>
      </div>

      <ul
        onClick={navClose}
        className={`${navbar ? "block" : "hidden"} links-container`}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className={`${navbar ? "flex" : "none"} icons-container`}>
        <a href="">
          <ProfileIcon />
        </a>
        <a href="">
          <SearchIcon />
        </a>
        <a href="">
          <FavoriteIcon />
        </a>
        <a href="" onClick={openDropdown}>
          <CartIcon />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
