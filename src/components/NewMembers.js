import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MemberItem } from "./MemberItem";

export const NewMembers = () => {

  const [latestUsers, setLatestUsers] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  const { accessToken } = currentUser;  


  useEffect(() => {
    const config = {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    };
    const getLatestUsers = () => {
      axios
        .get("https://olympus-backend.vercel.app/api/users/", config)
        .then((resp) => {
          setLatestUsers(resp.data);
        });
    };
    getLatestUsers();
  }, [accessToken]);

  return (
    <>
      <div className="md:w-5-6 lg:w-5-6 xl:w-2/6 p-10 border-slate-400 border-2 mt-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 md:mr-0 lg:mr-0 xl:mr-6">
        <div className="flex flex-col">
          <span className="text-xl font-semibold mb-4">New Members</span>

          {latestUsers.map((member) => {
            return <MemberItem key={member._id} member={member} />;
          })}
        </div>
      </div>
    </>
  );
};
