import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  doneFetchingData,
  failFetchingData,
  startFetchingData,
} from "../redux/userReducer";
import { MemberItem } from "./MemberItem";
import Skeleton from "react-loading-skeleton";

export const NewMembers = () => {
  const dispatch = useDispatch();
  const [latestUsers, setLatestUsers] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  const { isFetching } = useSelector((state) => state.user);
  const { accessToken } = currentUser;

  useEffect(() => {
    const config = {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    };
    const getLatestUsers = () => {
      dispatch(startFetchingData());
      axios
        .get("https://olympus-backend.vercel.app/api/users/?new=null", config)
        .then((resp) => {
          setLatestUsers(resp.data);
          dispatch(doneFetchingData());
        })
        .catch((error) => {
          console.log(error);
          dispatch(failFetchingData());
        });
    };
    getLatestUsers();
  }, [accessToken, dispatch]);

  return (
    <>
      <div className="md:w-5-6 lg:w-5-6 xl:w-2/6 p-10 border-slate-400 border-2 mt-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 md:mr-0 lg:mr-0 xl:mr-6">
        {isFetching ? (
          <>
            <div className="flex mt-4 p-2">
              <div className="flex w-1/4">
                <Skeleton
                  circle
                  height="100%"
                  containerClassName="avatar-skeleton"
                />
              </div>

              <div className="flex flex-col w-3/4">
                <Skeleton height="100%" width="100%" />
                <Skeleton height="100%" width="100%" />
              </div>
            </div>
            <div className="flex mt-4 p-2">
              <div className="flex w-1/4">
                <Skeleton
                  circle
                  height="100%"
                  containerClassName="avatar-skeleton"
                />
              </div>

              <div className="flex flex-col w-3/4">
                <Skeleton height="100%" width="100%" />
                <Skeleton height="100%" width="100%" />
              </div>
            </div>
            <div className="flex mt-4 p-2">
              <div className="flex w-1/4">
                <Skeleton
                  circle
                  height="100%"
                  containerClassName="avatar-skeleton"
                />
              </div>

              <div className="flex flex-col w-3/4">
                <Skeleton height="100%" width="100%" />
                <Skeleton height="100%" width="100%" />
              </div>
            </div>
            <div className="flex mt-4 p-2">
              <div className="flex w-1/4">
                <Skeleton
                  circle
                  height="100%"
                  containerClassName="avatar-skeleton"
                />
              </div>

              <div className="flex flex-col w-3/4">
                <Skeleton height="100%" width="100%" />
                <Skeleton height="100%" width="100%" />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col">
            <span className="text-xl font-semibold mb-4">New Members</span>

            {latestUsers.map((member) => {
              return <MemberItem key={member._id} member={member} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};
