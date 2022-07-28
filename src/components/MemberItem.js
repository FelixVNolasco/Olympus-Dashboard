
import React from "react";
// import Image from "next/image";

export const MemberItem = ({member}) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between mt-4">
        <div className="w-12 h-12 mr-2">
          <div className="h-full w-full">
            {/* <Image
              className="rounded-full"
              src={member.photoUrl}
              alt="Member Photo"
              width={32}
              height={32}
            /> */}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{member.name}</span>
          <span className="font-normal">{member.job}</span>
        </div>
        <div className="pt-1 pb-1 pr-3 pl-3 rounded-md bg-gray-400/70 hover:bg-gray-400/60 transition ease-in-out text-center font-semibold cursor-pointer">
          See
        </div>
      </div>
    </>
  );
};
