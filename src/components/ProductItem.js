import React, { useEffect } from "react";

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
    <div className="flex flex-row items-center justify-between p-4 h-20">
      <span className="font-semibold text-lg">{`${id.substring(0, 15)}...`}</span>

      <img src={img} alt="" width={64} height={64} />

      <span className="font-semibold text-lg ml-2">{`${title.substring(0, 30)}...`}</span>

      {inStock ? (
        <span className="font-semibold text-lg">Yes</span>
      ) : (
        <span className="font-semibold text-lg">No</span>
      )}

      <span className="font-semibold text-lg">{`$${price}`}</span>
      <div className="flex flex-row items-center h-full">
        <span className="pt-1 pb-1 pl-3 pr-3 bg-green-400 rounded-lg mr-2">
          Edit
        </span>
        <img
          src="https://www.svgrepo.com/show/192510/trash.svg"
          alt=""
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};
