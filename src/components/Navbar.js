import React, { useState } from "react";
import { ProfileMenu } from "./Navbar/ProfileMenu";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { urlImage } = currentUser;

  const handleMenu = () => {};

  return (
    <div className="h-16 bg-teal-600 text-white w-full">
      <div className="flex flex-row h-16 justify-between items-center">
        <div className="flex md:flex lg:flex lg:flex-row xl:flex xl: flex-row items-center">
          <div className="mr-2 ml-2 mt-1 ">
            <img
              src="https://www.svgrepo.com/show/218756/dashboard.svg"
              width={24}
              height={24}
              alt=""
            />
          </div>
          <span className="font-semibold text-2xl">Dashboard</span>
        </div>

        <div className="hidden md:hidden lg:hidden lg:flex-row xl:flex xl:flex-row items-center">
          {/* <div className="mr-4 h-ful bg-yellow-500/90 p-2 rounded-full cursor-pointer">
            <Image
              src="/notification-bell.svg"
              alt="Notificaction Logo"
              width={24}
              height={24}
            />
          </div> */}
          {/* <div className="mr-4 bg-indigo-400/80 p-2 rounded-full cursor-pointer">
            <Image
              src="/settings-gear.svg"
              alt="Setting Logo"
              width={24}
              height={24}
            />
          </div> */}

          <div
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
            }}
            className="h-12 w-12 mr-2 rounded-md border-4 border-green-800 cursor-pointer"
          >
            {urlImage !== "" ? (
              <img src={urlImage} alt="" />
            ) : (
              <img
                src="https://www.svgrepo.com/show/230988/profile-user.svg"
                alt=""
              />
            )}
          </div>
        </div>

        <div
          className="flex md:flex lg:flex xl:hidden items-center mr-4 cursor-pointer"
          onClick={handleMenu}
        >
            <img
              src="https://www.svgrepo.com/show/36538/menu.svg"
              width={24}
              height={24}
              alt=""              
            />          
        </div>
      </div>
      {showProfileMenu && <ProfileMenu />}
    </div>
  );
};
