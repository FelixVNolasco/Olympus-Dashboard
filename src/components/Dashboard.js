import React from "react";

import { NewMembers } from "./NewMembers";
import { LatestTransactions } from "./LatestTransactions";
import { Chart } from "./Chart";
import { DataCards } from "./DataCards";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-5/6">
        <DataCards />
        <Chart />
        <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row">
          <NewMembers />
          <LatestTransactions />
        </div>
      </div>
    </>
  );
};
