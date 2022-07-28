import React from "react";

export const TransactionItem = ({transaction}) => {
  return (
    <>
      <div className="flex flex-row md:flex-row lg:flex-row justify-between items-center mb-3">
        <span className="font-semibold">{transaction.name}</span>
        <span className="font-semibold">{transaction.date}</span>
        <span className="font-semibold">{`$${transaction.amount}`}</span>

        <div
          className={
            transaction.isApproved
              ? "pl-3 pr-3 pt-1 pb-2 rounded-md bg-green-200 text-center font-semibold cursor-pointer"
              : "pl-4 pr-4 pt-1 pb-2 rounded-md bg-red-300 text-center font-semibold cursor-pointer"
          }
        >
          {transaction.isApproved ? "Approved" : "Pending"}
        </div>
      </div>
    </>
  );
};
