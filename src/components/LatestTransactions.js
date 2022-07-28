import React from "react";
import { TransactionItem } from "./TransactionItem";

export const LatestTransactions = () => {
  const users = [
    {
      name: "Felix Vega",
      date: "24/06/2000",
      amount: "1984",
      isApproved: true,
    },
    {
      name: "Felix Vega",
      date: "23/06/2000",
      amount: "1984",
      isApproved: false,
    },
    {
      name: "Felix Vega",
      date: "22/06/2000",
      amount: "1984",
      isApproved: true,
    },
    {
      name: "Felix Vega",
      date: "21/06/2000",
      amount: "1984",
      isApproved: false,
    },
    {
      name: "Felix Vega",
      date: "20/06/2000",
      amount: "1984",
      isApproved: true,
    },
  ];

  return (
    <>
      <div className="md:w-5-6 lg:w-5-6 xl:w-5/6 p-10 border-slate-400 border-2 mt-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 md:mr-0 lg:mr-0 xl:mr-6">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Latest Transactions</span>
            <div className="flex flex-col mt-2">
              <div className="flex flex-row justify-between">
                <span className="font-semibold">Customer</span>
                <span className="font-semibold">Date</span>
                <span className="font-semibold mr-6">Amount</span>
                <span className="font-semibold">Status</span>
              </div>
              <div className="flex flex-col mt-2">
                {users.map((transaction) => {
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
