import React from "react";
import { Link } from "react-router-dom";

export const MemberItem = ({ member }) => {
  const { _id, username, email, urlImage } = member;

  console.log(member);
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <div className="h-12 w-8 flex items-center">
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

        <div className="flex flex-col">
          <span className="font-semibold">{username}</span>
          <span className="font-normal">{email}</span>
        </div>
        <Link
          to={`/users/${_id}`}
          className="pt-1 pb-1 pr-3 pl-3 rounded-md h-8 w-12 bg-gray-400/70 hover:bg-gray-400/60 transition ease-in-out text-center font-semibold cursor-pointer"
        >
          See
        </Link>
      </div>
    </>
  );
};
