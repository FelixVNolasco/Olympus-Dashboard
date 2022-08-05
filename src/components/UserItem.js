import React from "react";
import { Link } from "react-router-dom";

export const UserItem = ({ _id, username, email, isAdmin, createdAt }) => {
  return (
    <div className="grid grid-cols-6 justify-items-stretch justify-between p-4 items-center h-20 text-lg font-semibold">
      <span>{`${_id.substring(0, 15)}...`}</span>
      <span>{username}</span>
      <span>{email}</span>
      <div className="flex flex-row items-center justify-center mr-20 font-semibold">
        {isAdmin ? (
          <span className="mr-2">Yes</span>
        ) : (
          <span className="mr-2">No</span>
        )}
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </div>
      <span>{createdAt}</span>
      <span className="flex flex-row items-center">
        <Link
          to={`/users/${_id}`}
          className="pt-1 pb-1 pl-3 pr-3 bg-green-400 rounded-lg ml-6 mr-2"
        >
          Edit
        </Link>
      </span>
    </div>
  );
};
