import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  doneFetchingData,
  failFetchingData,
  startFetchingData,
} from "../redux/userReducer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChartData } from "../template/Dashboard";
import Skeleton from "react-loading-skeleton";

export const Chart = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { isFetching } = useSelector((state) => state.user);
  const { accessToken } = currentUser;
  const [latestTransactions, setLatestTransactions] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    };
    const getLatestTransactions = () => {
      dispatch(startFetchingData());
      axios
        .get("https://olympus-backend.vercel.app/api/users/stats", config)
        .then((resp) => {
          setLatestTransactions(resp.data);
          dispatch(doneFetchingData());
        })
        .catch((error) => {
          console.log(error);
          dispatch(failFetchingData());
        });
    };
    getLatestTransactions();
  }, [accessToken, dispatch]);

  console.log(latestTransactions);

  return (
    <>
      <div className="flex flex-col border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 mt-2 md:mr-0 lg:mr-0 xl:mr-6">
        {isFetching ? (
          <>
            <div className="p-8">
              <Skeleton height="100%" width="100%" />
            </div>
            <div className="h-72 w-full">
              <Skeleton height="100%" width="100%" />
            </div>
          </>
        ) : (
          <>
            <span className="p-8 text-xl font-semibold">
              Active Users Analytics
            </span>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={ChartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </>
  );
};
