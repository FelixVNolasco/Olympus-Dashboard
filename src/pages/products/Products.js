import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      axios
        .get("https://olympus-backend.vercel.app/api/products/")
        .then((resp) => {
          setProducts(resp.data);
        });
    };
    getProducts();
  }, []);


  return (
    <>
      <Navbar className="h-1/5" />
      <main className="flex flex-row justify-center">
        <Sidebar />
        <div className="flex flex-col mt-2 mr-6 w-5/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-between">
            {products.map((item) => {
              return (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  inStock={item.inStock}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center mt-4 mb-4">
            <Link
              to={"/product/new"}
              className="p-2 bg-purple-500/70 hover:bg-purple-500/60  font-semibold text-base rounded-md text-center cursor-pointer"
            >
              Add a new product
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
