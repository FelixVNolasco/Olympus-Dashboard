import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, title, price }) => {
  return (
    // <div className="grid grid-cols-6 justify-items-stretch items-center justify-between h-20 text-lg font-semibold">
    //   <span>{`${id.substring(0, 15)}...`}</span>

    //   <img src={img} alt="" width={64} height={64} />

    //   <span>{`${title.substring(0, 20)}...`}</span>

    //   <div className="flex flex-row items-center mr-20 font-semibold">
    //     {inStock ? (
    //       <span className="mr-2">Yes</span>
    //     ) : (
    //       <span className="mr-2">No</span>
    //     )}
    //     <div className="w-2 h-2 bg-green-400 rounded-full"></div>
    //   </div>

    //   <span>{`$${price}`}</span>
    //   <div className="flex flex-row items-center h-full">
    //     <Link to={`/products/${id}`} className="font-normal pt-1 pb-1 pl-3 pr-3 bg-green-400 hover:bg-green-400/80 rounded-lg mr-2 cursor-pointer">
    //       Edit
    //     </Link>
    //   </div>
    // </div>

    <Link
      to={`/products/${id}`}
      className="border-slate-400 border-2 rounded-sm drop-shadow-lg shadow-sm shadow-slate-500 transition ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"
    >
      <div className="flex flex-col p-4">
        <div className="flex justify-around">
          {img === "" ? (
            <img
              src="https://www.svgrepo.com/show/230988/profile-user.svg"
              alt=""
              width={32}
              height={32}
            />
          ) : (
            <img src={img} alt="" width={64} height={64} />
          )}
        </div>

        <span className="mt-2">{title}</span>
        <span className="mt-2">{`$${price}`}</span>
      </div>
    </Link>
  );
};
