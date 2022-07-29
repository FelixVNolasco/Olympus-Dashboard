import React from "react";

export const DataCards = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row w-full justify-between">
        <div className="w-full md:w-full lg:w-1/3 p-10 border-slate-400 border-2 mt-2 mr-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500">
          <div className="flex flex-col">
            <span className="text-xl">Revanue</span>
            <div className="flex flex-row justify-between">
              <span className="text-lg font-bold">$2,415</span>
              <div className="flex flex-row">
                <span className="mr-2">-11.4</span>

                <img
                  src="https://www.svgrepo.com/show/199621/down-arrow.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
            </div>
            <span className="font-light mt-2">Compared to last month</span>
          </div>
        </div>

        <div className="w-full md:w-full lg:w-1/3 p-10 border-slate-400 border-2 mt-2 mr-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500">
          <div className="flex flex-col">
            <span className="text-xl">Sales</span>
            <div className="flex flex-row justify-between">
              <span className="text-lg font-bold">$2,415</span>
              <div className="flex flex-row">
                <span className="mr-2">-1.4</span>
                <img
                  src="https://www.svgrepo.com/show/199621/down-arrow.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
            </div>
            <span className="font-light mt-2">Compared to last month</span>
          </div>
        </div>

        <div className="w-full md:w-full lg:w-1/3 p-10 border-slate-400 border-2 mt-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 md:mr-0 lg:mr-0 xl:mr-6">
          <div className="flex flex-col">
            <span className="text-xl">Cost</span>
            <div className="flex flex-row justify-between">
              <span className="text-lg font-bold">$2,033</span>
              <div className="flex flex-row">
                <span className="mr-2">+1.7</span>
                <img
                  src="https://www.svgrepo.com/show/199531/up-arrow-ui.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
            </div>
            <span className="font-light mt-2">Compared to last month</span>
          </div>
        </div>
      </div>
    </>
  );
};
