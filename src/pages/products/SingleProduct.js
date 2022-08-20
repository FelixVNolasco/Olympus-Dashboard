import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  doneFetchingData,
  failFetchingData,
  startFetchingData,
} from "../../redux/userReducer";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";
import {
  FaTag,
  FaCubes,
  FaMoneyBill,
  FaPlusCircle,
  FaPenSquare,
  FaBarcode,
} from "react-icons/fa";

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
        .get(
          `https://olympus-backend.vercel.app/api/products/find/${productId}`
        )
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

  const actualDate = new Date();

  const createdAtDate = new Date(product?.createdAt);
  const differenceCreated = Math.abs(actualDate - createdAtDate);
  const daysCreated = differenceCreated / (1000 * 3600 * 24);

  const updatedAtDate = new Date(product?.updatedAt);
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
                  {product?.img !== "" ? (
                    <img src={product?.img} alt="" />
                  ) : (
                    <img
                      src="https://www.svgrepo.com/show/26822/shoe.svg"
                      alt=""
                    />
                  )}
                </div>
                <div className="w-full md:w-9/12 mx-2 h-64">
                  <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <FaBarcode width={24} height={24} />
                      <span className="tracking-wide">Product</span>
                    </div>
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaTag width={24} height={24} />
                            <div className="p-2 font-semibold">Model</div>
                          </div>
                          <div className="p-2">{product?.title}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaMoneyBill width={24} height={24} />
                            <div className="p-2 font-semibold">Price</div>
                          </div>
                          <div className="p-2">{`$${product?.price}`}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaCubes width={24} height={24} />
                            <div className="p-2 font-semibold">In Stock?</div>
                          </div>
                          {product?.inStock ? (
                            <div className="p-2">Yes</div>
                          ) : (
                            <div className="p-2">No</div>
                          )}
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaPlusCircle width={24} height={24} />
                            <div className="p-2 font-semibold">Created at</div>
                          </div>
                          <div className="p-2">{`${daysCreated.toFixed(
                            0
                          )} days ago`}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="flex items-center">
                            <FaPenSquare width={24} height={24} />
                            <div className="p-2 font-semibold">Updated at</div>
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
