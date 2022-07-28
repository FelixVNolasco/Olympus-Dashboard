// import Image from "next/image";
import React from "react";

export const MenuItem = ({ item }) => {
  return (
    <>
      <div className="flex flex-row">
        <img src={item.img} alt={`${item.title} Logo`} width={24} height={24} />
        <span className="font-semibold text-lg ml-2">{item.title}</span>
      </div>
    </>
  );
};
