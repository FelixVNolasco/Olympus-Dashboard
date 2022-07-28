import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import { SidebarItem } from "./SidebarItem";

const dashboardItems = [
  { title: "Home", img: "https://www.svgrepo.com/show/16254/home.svg", path: "/" },
  { title: "Analytics", img: "https://www.svgrepo.com/show/66212/analytics.svg", path: "/" },
  { title: "Sales", img: "https://www.svgrepo.com/show/22752/ads.svg", path: "/" },
];

const quickMenuItems = [
  { title: "Users", img: "https://www.svgrepo.com/show/4529/user.svg", path: "/users" },
  { title: "Products", img: "https://www.svgrepo.com/show/171950/print-products.svg", path: "/products" },
  { title: "Transactions", img: "https://www.svgrepo.com/show/205809/credit-card-commerce-and-shopping.svg", path: "/" },
  { title: "Reports", img: "https://www.svgrepo.com/show/235601/analytics.svg", path: "/" },
];

const notificationsItems = [
  { title: "Mail", img: "https://www.svgrepo.com/show/37043/mail.svg", path: "/" },
  { title: "Feedback", img: "https://www.svgrepo.com/show/357010/approval.svg", path: "/" },
  { title: "Messages", img: "https://www.svgrepo.com/show/375840/mail.svg", path: "/" },
];

const staffItems = [
  { title: "Manage", img: "https://www.svgrepo.com/show/49407/scientist.svg", path: "/" },
  { title: "Analytics", img: "https://www.svgrepo.com/show/9099/analytics.svg", path: "/" },
  { title: "Reports", img: "https://www.svgrepo.com/show/235611/analytics.svg", path: "/" },
];

export const Sidebar = () => {
  return (
      <div className=" hidden md:hidden lg:hidden xl:flex flex-col w-1/6 border-slate-400 border-2 rounded drop-shadow-lg shadow-sm shadow-slate-400 mr-6 mt-2">
        <div className="flex flex-col p-4">
          <h3 className="font-semibold text-xl p-2">Dashboard</h3>
          <ul>
            {dashboardItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div>
        <div className="flex flex-col p-4">
          <h3 className="font-semibold text-xl">Quick Menu</h3>
          <ul>
            {quickMenuItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div>
        <div className="flex flex-col p-4">
          <h3 className="font-semibold text-xl">Notifications</h3>
          <ul>
            {notificationsItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div>
        <div className="flex flex-col  p-4">
          <h3 className="font-semibold text-xl">Staff</h3>
          <ul>
            {staffItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div>
      </div>
  );
};
