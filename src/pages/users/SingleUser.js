import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaCalendarCheck,
  FaCalendarPlus,
  FaChair,
  FaEnvelope,
  FaIdCard,
  FaUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import {
  doneFetchingData,
  failFetchingData,
  startFetchingData,
} from "../../redux/userReducer";

export const SingleUser = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const { isFetching } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.user);
  const { accessToken } = currentUser;

  useEffect(() => {
    const config = {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    };
    const getUser = () => {
      dispatch(startFetchingData());
      axios
        .get(
          `https://olympus-backend.vercel.app/api/users/find/${userId}`,
          config
        )
        .then((resp) => {
          setUser(resp.data);
          dispatch(doneFetchingData());
        })
        .catch((error) => {
          dispatch(failFetchingData());
          console.log(error);
        });
    };
    getUser();
  }, [accessToken, dispatch, userId]);

  const actualDate = new Date();

  const createdAtDate = new Date(user?.createdAt);
  const differenceCreated = Math.abs(actualDate - createdAtDate);
  const daysCreated = differenceCreated / (1000 * 3600 * 24);

  const updatedAtDate = new Date(user?.updatedAt);
  const differenceUpdated = Math.abs(actualDate - updatedAtDate);
  const daysUpdated = differenceUpdated / (1000 * 3600 * 24);
  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-center">
        <Sidebar />
        <div className="flex flex-col mt-2 mr-6 w-5/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          <div className="container mx-auto my-5 p-5">
            {isFetching ? (
              <span>Cargando...</span>
            ) : (
              <div className="md:flex no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2 p-8 transition ease-in-out duration-300 hover:bg-slate-200 rounded-md cursor-pointer">
                  {user?.urlImage !== "" ? (
                    <img src={user?.urlImage} alt="" />
                  ) : (
                    <img
                      src="https://www.svgrepo.com/show/230988/profile-user.svg"
                      alt=""
                    />
                  )}
                </div>
                <div className="w-full md:w-9/12 mx-2 h-64">
                  <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <FaIdCard width={24} height={24} />
                      <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaUser width={24} height={24} />
                            <div className="p-2 font-semibold">Username</div>
                          </div>
                          <div className="p-2">{user?.username}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaEnvelope width={24} height={24} />
                            <div className="p-2 font-semibold">Email</div>
                          </div>
                          <div className="p-2">{user?.email}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaChair width={24} height={24} />
                            <div className="p-2 font-semibold">Is Admin?</div>
                          </div>
                          {user?.isAdmin ? (
                            <div className="p-2">Yes</div>
                          ) : (
                            <div className="p-2">No</div>
                          )}
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaCalendarPlus width={24} height={24} />
                            <div className="p-2 font-semibold">Created</div>
                          </div>
                          <div className="p-2">{`${daysCreated.toFixed(
                            0
                          )} days ago.`}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaCalendarCheck width={24} height={24} />
                            <div className="p-2 font-semibold">Updated</div>
                          </div>
                          <div className="p-2">{`${daysUpdated.toFixed(
                            0
                          )} days ago.`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
