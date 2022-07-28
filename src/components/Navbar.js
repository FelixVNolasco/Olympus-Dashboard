import React from "react";
// import Image from "next/image";

export const Navbar = () => {

  const handleMenu = () => {
    console.log('hola');
  }
  return (
    <div className="h-16 bg-teal-600 text-white w-full">
      <div className="flex flex-row h-16 justify-between items-center">
        <div className="flex md:flex lg:flex lg:flex-row xl:flex xl: flex-row items-center">
          <div className="mr-2 ml-2 mt-1 ">
            {/* <Image
              src="/dashboard.svg"
              alt="Dashboard Logo"
              width={24}
              height={24}
            /> */}
          </div>
          <span className="font-semibold text-2xl">Dashboard</span>
        </div>

        <div className="hidden md:hidden lg:hidden lg:flex-row xl:flex xl:flex-row items-center">
          <div className="mr-4 h-ful bg-yellow-500/90 p-2 rounded-full cursor-pointer">
            {/* <Image
              src="/notification-bell.svg"
              alt="Notificaction Logo"
              width={24}
              height={24}
            /> */}
          </div>
          <div className="mr-4 bg-indigo-400/80 p-2 rounded-full cursor-pointer">
            {/* <Image
              src="/settings-gear.svg"
              alt="Setting Logo"
              width={24}
              height={24}
            /> */}
          </div>
          <div className="h-12 w-12 mr-2 rounded-full border-2 border-indigo-800 cursor-pointer"></div>
        </div>

        <div className="flex md:flex lg:flex xl:hidden items-center" onClick={handleMenu}>
          <div className="mr-2 ml-6 mt-1 ">
            {/* <Image
              src="/hamburger-menu.svg"
              alt="Hamburger Menu Logo"
              width={24}
              height={24}
            /> */}
          </div>
        </div>

      </div>
    </div>
  );
};
