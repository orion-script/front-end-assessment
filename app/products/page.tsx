import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Shophero from "@/components/shophero/Shophero";
import Products from "@/components/products/Products";
import Footer from "@/components/footer/Footer";

const page = async () => {
  return (
    <>
      <Navbar />
      <Shophero />
      <Products />
      <Footer />
    </>
  );
};

export default page;
