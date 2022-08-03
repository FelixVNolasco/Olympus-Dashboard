import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutStart } from "../../redux/userReducer";

export const ProfileMenu = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { username } = currentUser;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutStart());
    navigate("/auth/login");
  };

  return (
    <div className="absolute left-0 z-20 py-1 mt-1 mr-1 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800">
      <div className="w-48">
        <div className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
          Signed in as
          <br />
          <span className="font-medium">{username}</span>
        </div>
        <hr className="border-gray-200 dark:border-gray-700" />
        <Link
          to="/profile"
          className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
        >
          My Profile
        </Link>
        <hr className="border-gray-200 dark:border-gray-700" />
        <div onClick={handleLogout}>
          <button className="flex items-center px-4 py-2 space-x-3 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none">
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
