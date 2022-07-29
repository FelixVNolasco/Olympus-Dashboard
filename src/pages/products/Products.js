import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ProductItem } from "../../components/ProductItem";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";
// import { MenuItem } from "../../components/MenuItem";
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

  console.log(products);

  return (
    <>
      <Navbar className="h-1/5" />
      <main className="flex flex-row justify-center">
        <Sidebar />
        <div className="flex flex-col mt-2 mr-6 w-5/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          {/* <div className="flex flex-row justify-between p-4 mr-4">
            {titles.map((item) => {
              return <MenuItem key={item.title} item={item} />;
            })}
          </div> */}

          <div className="flex flex-col justify-between p-4 mr-4">
            {products.map((item) => {
              return (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  img={item.img}
                  title={item.title}
                  inStock={item.inStock}
                  price={item.price}
                />
              );
            })}
          </div>
          <Link className="flex items-center justify-center mt-4 mb-4" to={"/"}>
            <span className="pl-2 pr-2 pt-3 pb-2 bg-purple-500/70 hover:bg-purple-500/60  font-semibold text-base rounded-md text-center cursor-pointer">
              Add a new product
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};
