import React from "react";
import { Link } from "react-router-dom";

export const MemberItem = ({ member }) => {
  const { _id, username, email, urlImage } = member;
  return (

    <Link to={`/users/${_id}`} className="flex items-center space-around mt-4 p-2 transition ease-in-out duration-200 hover:bg-slate-200">
      <div className="flex w-1/4 items-center">
        {urlImage !== "" ? (
          <img
            className="rounded-md"
            src={urlImage}
            alt="Memberphoto"
            height={32}
            width={32}
          />
        ) : (
          <img
            className="rounded-md"
            src="https://www.svgrepo.com/show/230988/profile-user.svg"
            alt="Memberphoto"
            height={32}
            width={32}
          />
        )}
      </div>
      <div className="flex w-3/4 flex-col">
        <span className="font-semibold">{username}</span>
        <span className="font-normal">{email}</span>
      </div>
    </Link>
  );
};
