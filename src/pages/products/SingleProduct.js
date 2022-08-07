import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  doneFetchingData,
  failFetchingData,
  startFetchingData,
} from "../../redux/userReducer";

export const SingleProduct = () => {

  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const { isFetching } = useSelector((state) => state.user);

  useEffect(() => {
    const getProduct = () => {
      dispatch(startFetchingData());
      axios
        .get(`https://olympus-backend.vercel.app/api/products/find/${productId}`)
        .then((resp) => {
          setProduct(resp.data);
          dispatch(doneFetchingData());
        })
        .catch((error) => {
          dispatch(failFetchingData());
          console.log(error);
        });
    };
    getProduct();
  }, [dispatch, productId]);


  return (

    <>
      {
        isFetching ?
          <span>Cargando...</span>
          :
          <div>
            <span>{product?.title}</span>
            <span>{product?.desc}</span>
            <span>{product?.createdAt}</span>
            <span>{product?.updatedAt}</span>
            <span>{product?.price}</span>
            <span>{product?.instock}</span>
          </div>
      }
    </>
  )

}