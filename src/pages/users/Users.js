import React from "react";
import { Footer } from "../../components/Footer";
import { MenuItem } from "../../components/MenuItem";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { UserItem } from "../../components/UserItem";

export const Users = () => {
  const titles = [
    { title: "ID", img: "https://www.svgrepo.com/show/256763/id-id.svg" },
    { title: "Username", img: "https://www.svgrepo.com/show/8135/user.svg" },
    { title: "Email", img: "https://www.svgrepo.com/show/61111/email.svg" },
    {
      title: "Status",
      img: "https://www.svgrepo.com/show/335284/status-lagging.svg",
    },
    {
      title: "Transactions",
      img: "https://www.svgrepo.com/show/10898/money.svg",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-center">
        <Sidebar />
        <div className="flex flex-col mt-2 mr-6 w-5/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          <div className="flex flex-row justify-between p-4">
            {titles.map((item) => {
              return <MenuItem key={item.title} item={item} />;
            })}
          </div>

          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </div>
      </main>
      <Footer />
    </>
  );
};
