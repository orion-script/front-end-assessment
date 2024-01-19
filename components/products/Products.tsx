"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Delivery from "../delivery/Delivery";
import Spinner from "../spinner/spinner";
import "./products.scss";

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  images: [];
  discountPercentage: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get<ApiResponse>(
          "https://dummyjson.com/products"
        );

        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setErrorMessage("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Products", products);

  return (
    <div className="product-container">
      {loading && <Spinner />}
      {errorMessage && <div>{errorMessage}</div>}
      <div className="products">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <Link key={product.id} href={`/products/${product.id}`} passHref>
              <div className="product-card">
                <div className="product-image">
                  <Image
                    src={product.images?.[product.images.length - 1] || ""}
                    alt={product.title}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="product-title">{product.title}</div>
                <div className="product-description">{product.description}</div>
                <div className="product-price">Rs. {product.price}</div>
              </div>
            </Link>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div className="button-container">
        <div className="button-text">1</div>
        <div className="button-text">2</div>
        <div className="button-text">3</div>
        <div className="button-text">Next</div>
      </div>
      <Delivery />
    </div>
  );
};

export default Products;
