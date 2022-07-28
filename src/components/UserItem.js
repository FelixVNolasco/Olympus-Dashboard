import React from "react";

export const UserItem = () => {
  return (
    <div className="flex flex-row justify-between p-4 items-center h-20">
      <span className="font-semibold text-lg ml-6">1</span>
      <span className="font-semibold text-lg ml-20">Felix Vega</span>
      <span className="font-semibold text-lg">felixvnolasco@gmail.com</span>
      <div className="flex flex-row items-center mr-20">
        <span className="font-semibold text-lg mr-2">Activo</span>
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </div>
      <span className="font-semibold text-lg">$1902.85</span>
      {/* <span className="flex flex-row items-center">
          <span className="pt-1 pb-1 pl-3 pr-3 bg-green-400 rounded-lg mr-2">
            Edit
          </span>
          <Image
            src="/trashbin.svg"
            alt="Trashbin Logo"
            width={32}
            height={32}
          />
        </span> */}
    </div>
  );
};
