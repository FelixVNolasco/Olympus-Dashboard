import React from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

export default function newproduct() {
  const formData = [
    { title: "Title", placeholder: "Tenis Adidas Air-Flow" },
    { title: "Description", placeholder: "description..." },
    { title: "Price", placeholder: "100" },
    { title: "Categories", placeholder: "women, man" },
  ];
  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-center">
        <Sidebar />
        <div className="flex flex-col mt-2 w-5/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500">
          <div className="flex flex-col justify-between p-8 mr-4 w-full md:w-full lg:w-4/6 xl:w-4/6 ">
            <h2 className="font-semibold text-2xl">New Product</h2>
            <span className="mt-4 font-semibold text-base mb-2">
              Select a file:
            </span>
            <input
              className="p-2 border-2 border-slate-400 rounded-md"
              type="file"
              name="myfile"
            />
            {formData.map(({ title, placeholder }) => {
              return (
                <div className="flex flex-col mt-4" key={title}>
                  <span className="font-semibold text-base">{title}</span>
                  <input
                    className="p-2 border-2 border-slate-400 rounded-md"
                    placeholder={placeholder}
                  ></input>
                </div>
              );
            })}
            <span className="font-semibold text-base mt-4">Stock</span>
            <select
              name=""
              className="p-2 border-2 border-slate-400"
              defaultValue={"Yes"}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
