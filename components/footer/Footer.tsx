import React from "react";
import Image from "next/image";
import mlogo from "../../assets/m-logo.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        <Image src={mlogo} alt="" className="footer-logo" />
        <p className="footer-first-text">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>

        <div className="footer-ul-container">
          <ul className="footer-links">
            <p>Links</p>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>

          <ul className="footer-links">
            <p>Help</p>
            <li>
              <a href="">Payment Options</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Privacy Policies</a>
            </li>
          </ul>
        </div>

        <div className="form-container">
          <form action="">
            <label htmlFor="">Newsletter</label>
            <input type="text" placeholder="Enter Your Email Address" />
          </form>

          <button>SUBSCRIBE</button>
        </div>
      </div>
      <hr />
      <p>2022 Meubel House. All rights reverved</p>
    </div>
  );
}

export default Footer;
