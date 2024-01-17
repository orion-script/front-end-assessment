import React from "react";
import Image from "next/image";
import Logos from "../../assets/Meubel-House_Logos-05.png";
import {
  ArrowrightIcon,
  FilterIcon,
  GridIcon,
  ViewListIcon,
  ArrowDownIcon,
} from "../../components/SVG";
import "./shophero.scss";

function Shophero() {
  return (
    <div className="hero-container">
      <Image src={Logos} className="image" alt="Meubel House" />
      <h1>Shop</h1>
      <div className="text-container">
        <p className="text">Home</p>
        <ArrowrightIcon />
        <p className="text">Shop</p>
      </div>

      <div className="section-1">
        <div className="section-1-left">
          <FilterIcon />
          <p className="section-1-left-text">Filter</p>
          <GridIcon />
          <ViewListIcon />
          <div className="vertical-line"></div>
          <p className="section-1-left-text">Showing 1–16 of 32 results</p>
        </div>
        <div className="section-1-right">
          <p className="section-1-right-text">Show</p>
          <div className="section-1-right-span">16</div>
          <p className="section-1-right-text">Short by</p>
          <div className="section-1-right-span">Default</div>
        </div>
      </div>

      <div className="mobile-section-1">
        <FilterIcon />
        <p className="section-1-left-text">Filter</p>
        <GridIcon />
        <ViewListIcon />
        <div className="vertical-line"></div>
        <p>Default</p>
        <ArrowDownIcon />
        <div className="vertical-line"></div>
        <p className="mobile-section-1-text">Show</p>
        <div className="mobile-section-1-span">16</div>
      </div>
    </div>
  );
}

export default Shophero;
