import React from "react";
import { Link } from "react-router-dom";

export const UserCard = ({
  _id,
  username,
  email,
  isAdmin,
  createdAt,
  urlImage,
}) => {
  return (
    <Link
      to={`/users/${_id}`}
      className="border-slate-400 border-2 rounded-sm drop-shadow-lg shadow-sm shadow-slate-500 transition ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"
    >
      <div className="flex flex-col p-4">
        <div className="flex justify-around">
          {urlImage === "" ? (
            <img
              src="https://www.svgrepo.com/show/230988/profile-user.svg"
              alt=""
              width={32}
              height={32}
            />
          ) : (
            <img src={urlImage} alt="" width={24} height={24} />
          )}

          <span>{username}</span>
        </div>

        <span className="mt-2">{email}</span>
      </div>
    </Link>
  );
};
