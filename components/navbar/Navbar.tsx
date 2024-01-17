"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FavoriteIcon,
  ProfileIcon,
  SearchIcon,
  CartIcon,
  MenuOpenIcon,
  MenuCloseIcon,
  DropDownCloseIcon,
} from "../SVG";
import "./navbar.scss";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  return (
    <nav>
      {/* dropdown start */}
      {/* <div className="dropdown-container close"> */}
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

        <div className="cart-items-container"></div>
        <div className="total">
          <p className="text">Subtotal</p>
          <p className="number">Rs. 250,000.00</p>
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
          <a href="">Home</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
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
