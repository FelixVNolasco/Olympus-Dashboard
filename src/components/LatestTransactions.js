import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneFetchingData, failFetchingData, startFetchingData } from "../redux/userReducer";
import { latestUsers } from "../template/Dashboard";
import { TransactionItem } from "./TransactionItem";

export const LatestTransactions = () => {

  // const dispatch = useDispatch();
  // const { currentUser } = useSelector((state) => state.user);
  // const { isFetching } = useSelector((state) => state.user);
  // const { accessToken } = currentUser;
  // const [latestTransactions, setLatestTransactions] = useState([]);


  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       token: `Bearer ${accessToken}`,
  //     },
  //   };
  //   const getLatestTransactions = () => {
  //     dispatch(startFetchingData());
  //     axios
  //       .get("https://olympus-backend.vercel.app/api/users/", config)
  //       .then((resp) => {
  //         setLatestTransactions(resp.data);
  //         dispatch(doneFetchingData());
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         dispatch(failFetchingData());
  //       });
  //   };
  //   getLatestTransactions();
  // }, [accessToken, dispatch]);

  return (
    <>
      <div className="md:w-5-6 lg:w-5-6 xl:w-5/6 p-10 border-slate-400 border-2 mt-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 md:mr-0 lg:mr-0 xl:mr-6">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Latest Transactions</span>
            <div className="flex flex-col mt-2">
              <div className="grid grid-cols-4 justify-items-stretch">
                <span className="font-semibold">Customer</span>
                <span className="font-semibold">Date</span>
                <span className="font-semibold mr-6">Amount</span>
                <span className="font-semibold">Status</span>
              </div>
              <div className="flex flex-col mt-2">
                {latestUsers.map((transaction) => {
                  return (
                    <TransactionItem key={transaction.date} transaction={transaction}/>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
