import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
        .get(`https://olympus-backend.vercel.app/api/users/find/${userId}`, config)
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

  return <>
    {

      isFetching ?

        <span>Cargando...</span>
        :

        <div>
          <span>{user?.createdAt}</span>
          <span>{user?.email}</span>
          <span>{user?.isAdmin}</span>
          <span>{user?.updatedAt}</span>
          <span>{user?.urlImage}</span>
          <span>{user?.username}</span>
        </div>


    }</>;
};
