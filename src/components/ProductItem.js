import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ id, img, title, inStock, price }) => {
  //FIXME:
  // CHANGE THE BEHEAVIOR OF USE EFFECT

  useEffect(() => {
    // const addNewProduct = async () => {
    //   try {
    //     const docRef = await addDoc(collection(db, "products"), {
    //       name: "Tenis Nike",
    //       img: "",
    //       stock: true,
    //       price: 120,
    //     });
    //     console.log("Document written with ID: ", docRef);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    // };
    // addNewProduct();
  }, []);

  return (
    <div className="grid grid-cols-6 items-center justify-between h-20 text-lg font-semibold">
      <span>{`${id.substring(0, 15)}...`}</span>

      <img src={img} alt="" width={64} height={64} />

      <span>{`${title.substring(0, 20)}...`}</span>

      <div className="flex flex-row items-center mr-20 font-semibold">
        {inStock ? (
          <span className="mr-2">Yes</span>
        ) : (
          <span className="mr-2">No</span>
        )}
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </div>

      <span>{`$${price}`}</span>
      <div className="flex flex-row items-center h-full">
        <Link to={`/products/${id}`} className="font-normal pt-1 pb-1 pl-3 pr-3 bg-green-400 hover:bg-green-400/80 rounded-lg mr-2 cursor-pointer">
          Edit
        </Link>
      </div>
    </div>
  );
};
