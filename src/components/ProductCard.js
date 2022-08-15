import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, title, price, inStock }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="border-slate-400 border-2 rounded-sm drop-shadow-lg shadow-sm shadow-slate-500 transition ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"
    >
      <div className="flex flex-col p-4">
        <div className="flex justify-around rounded-md">
          {img === "" ? (
            <img
              src="https://www.svgrepo.com/show/230988/profile-user.svg"
              alt=""
              className="rounded-md"
              width={64}
              height={64}
            />
          ) : (
            <img className="rounded-md" src={img} alt="" width={128} height={128} />
          )}
        </div>

        <span className="mt-2">{title}</span>
        <span className="mt-2">{`$${price}`}</span>
        {
          inStock ?
          <span className="mt-2">In Stock</span> 
          : 
          <span className="mt-2">Out of Stock</span>
        }
      </div>
    </Link>
  );
};
