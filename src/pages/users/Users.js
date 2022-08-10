import axios from "axios";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { UserCard } from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import {
  doneFetchingData,
  failFetchingData,
  startFetchingData,
} from "../../redux/userReducer";

export const Users = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const { isFetching } = useSelector((state) => state.user);

  const { accessToken } = currentUser;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    };
    const getUsers = () => {
      dispatch(startFetchingData());
      axios
        .get("https://olympus-backend.vercel.app/api/users/", config)
        .then((resp) => {
          setUsers(resp.data);
          dispatch(doneFetchingData());
        })
        .catch((error) => {
          console.log(error);
          dispatch(failFetchingData());
        });
    };
    getUsers();
  }, [accessToken, dispatch]);

  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-center">
        <Sidebar />
        <div className="flex flex-col mt-2 mr-6 w-5/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          {isFetching ? (
            <h1>LOADING</h1>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-between">
              {users.map((user) => {
                const { _id, username, email, isAdmin, createdAt, urlImage } =
                  user;
                return (
                  <UserCard
                    key={_id}
                    _id={_id}
                    username={username}
                    email={email}
                    isAdmin={isAdmin}
                    createdAt={createdAt}
                    urlImage={urlImage}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
