"use client";
import React from "react";
import Image from "next/image";
import productImage from "../../assets/chair.png";
import frame1 from "../../assets/frame-1.svg";
import frame2 from "../../assets/far.svg";
import frame3 from "../../assets/frame-3.svg";
import frame4 from "../../assets/frame-4.svg";
import product1 from "../../assets/Group107.png";
import product2 from "../../assets/Group106.png";
import chair1 from "../../assets/Trenton-modular-sofa_31.png";
import chair2 from "../../assets/Granite-dining-table-with-dining-chair-1.png";
import chair3 from "../../assets/Outdoor-bar-table-and-stool-1.png";
import chair4 from "../../assets/Plain-console-with-teak-mirror-1.png";
import Linkedin from "../../assets/akar-icons_linkedin-box-fill.svg";
import Navbar from "@/components/navbar/Navbar";
import {
  ArrowrightIcon,
  StarIcon,
  FavIcon,
  FacebookIcon,
  linkIcon,
  TwitterIcon,
} from "../../components/SVG";
import "./singleproduct.scss";
import Footer from "@/components/footer/Footer";

function Page() {
  return (
    <div className="product-container">
      <Navbar />
      <div className="product-section-1">
        <div className="product-section-1-inner">
          <p className="text">Home</p>
          <ArrowrightIcon />
          <p className="text">Shop</p>
          <ArrowrightIcon />
          <div className="vertical-line"></div>
          <p className="span">Asgaard sofa</p>
        </div>
      </div>

      <div className="product-section-2">
        <div className="product-section-2-left">
          <div className="small-images">
            <Image src={frame1} alt="" className="images" />
            <Image src={frame2} alt="" className="images" />
            <Image src={frame3} alt="" className="images" />
            <Image src={frame4} alt="" className="images" />
          </div>
          <Image src={productImage} alt="" className="big-images" />

          <div className="dots">
            <div className="dot"></div>
            <div className="dot light"></div>
            <div className="dot light"></div>
            <div className="dot light"></div>
            <div className="dot light"></div>
          </div>
        </div>

        <div className="product-section-2-right">
          <h1>Asgaard sofa</h1>
          <span>Rs. 250,000.00</span>
          <div className="ratings-container">
            <div className="stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="vertical-line"></div>
            <p className="review-text">5 Customer Review</p>
          </div>
          <p className="description">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <p className="size-title">Size</p>
          <div className="size-container">
            <div className="">L</div>
            <div className="">XL</div>
            <div className="">XS</div>
          </div>
          <p className="color-title">Color</p>
          <div className="color-container">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="cart-container">
            <div className="signs-container">
              <p className="sign">-</p>
              <p className="quatity">1</p>
              <p className="sign">+</p>
            </div>
            <button className="addtocart-btn">Add To Cart</button>
          </div>
          <hr className="horizontal-line" />

          <div className="products-details-container">
            <div className="products-details">
              <div className="products">
                <p className="title">SKU</p>
                <div className="span">:&nbsp; SS001</div>
              </div>
              <div className="products">
                <p className="title">Category</p>
                <div className="span">:&nbsp; Sofas</div>
              </div>
              <div className="products">
                <p className="title">Tags</p>
                <div className="span">:&nbsp; Sofa, Chair, Home, Shop</div>
              </div>
              <div className="products">
                <p className="title">Share</p>
                <div className="span">
                  :&nbsp;
                  <FacebookIcon />
                  <Image src={Linkedin} alt="" className="linkedin-icon" />
                  <TwitterIcon />
                </div>
              </div>
            </div>
            <FavIcon />
          </div>
        </div>
      </div>
      <hr />
      <div className="description-container">
        <h1 className="description-title">Description</h1>
        <p className="description-text">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="description-text">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
        <div className="products-image-container">
          <Image
            src={product1}
            alt="product-image"
            className="products-image"
          />
          <Image
            src={product2}
            alt="product-image"
            className="products-image"
          />
        </div>
      </div>
      <hr />
      <div className="rated-products-container">
        <h1 className="rated-products-title">Related Products</h1>
        <div className="rated-products">
          <div className="rated-products-side">
            <div className="each-rated-product">
              <Image src={chair1} alt="" className="image" />
              <p className="name">Trenton modular sofa_3</p>
              <p className="price">Rs. 25,000.00</p>
            </div>
            <div className="each-rated-product">
              <Image src={chair2} alt="" className="image" />
              <p className="name">Granite dining table with dining chair</p>
              <p className="price">Rs. 25,000.00</p>
            </div>
          </div>
          <div className="rated-products-side">
            <div className="each-rated-product">
              <Image src={chair3} alt="" className="image" />
              <p className="name">Outdoor bar table and stool</p>
              <p className="price">Rs. 25,000.00</p>
            </div>
            <div className="each-rated-product">
              <Image src={chair4} alt="" className="image" />
              <p className="name">Plain console with teak mirror</p>
              <p className="price">Rs. 25,000.00</p>
            </div>
          </div>
        </div>
        <div className="viewmore-btn-container">
          <button className="viewmore-btn">View More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
