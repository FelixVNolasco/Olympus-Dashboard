import axios from "axios";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { MenuItem } from "../../components/MenuItem";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { UserItem } from "../../components/UserItem";
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

  const titles = [
    { title: "ID", img: "https://www.svgrepo.com/show/256763/id-id.svg" },
    { title: "Username", img: "https://www.svgrepo.com/show/8135/user.svg" },
    { title: "Email", img: "https://www.svgrepo.com/show/61111/email.svg" },
    {
      title: "Is Admin?",
      img: "https://www.svgrepo.com/show/335284/status-lagging.svg",
    },
    {
      title: "Creation Date",
      img: "https://www.svgrepo.com/show/10898/money.svg",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-center">
        <Sidebar />

        <div className="flex flex-col mt-2 mr-6 w-5/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          {isFetching ? (
            <h1>LOADING</h1>
          ) : (
            <>
              <div className="grid grid-cols-6 justify-items-stretch justify-between p-4">
                {titles.map((item) => {
                  return <MenuItem key={item.title} item={item} />;
                })}
              </div>

              {users.map((user) => {
                const { _id, username, email, isAdmin, createdAt } = user;
                return (
                  <UserItem
                    key={_id}
                    _id={_id}
                    username={username}
                    email={email}
                    isAdmin={isAdmin}
                    createdAt={createdAt}
                  />
                );
              })}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
