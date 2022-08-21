import React from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import Select from "react-select";
import { useForm } from "../../hooks/useForm";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";

export const NewProduct = () => {
  const [sizes, setSizes] = useState([]);
  const [stock, setStock] = useState();
  const [categories, setCategories] = useState();

  const [formValues, handleInputChange] = useForm({
    title: "",
    desc: "",
    img: "",
    price: "",
  });

  const { title, desc, price } = formValues;

  const { currentUser } = useSelector((state) => state.user);
  // const { isFetching } = useSelector((state) => state.user);
  const { accessToken } = currentUser;

  const config = {
    headers: {
      token: `Bearer ${accessToken}`,
    },
  };

  const handleSubmit = () => {
    formValues.size = sizes;
    formValues.inStock = true;
    formValues.categories = categories;
    formValues.img =
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/60b4218d-108b-4a1c-a59d-3e6eecfdfdaa/calzado-air-force-1-high-07-VqQK8m.png";

    const addNewProduct = async () => {
      try {
        axios
          .post(
            "https://olympus-backend.vercel.app/api/products/",
            formValues,
            config
          )
          .then((response) => console.log(response));
      } catch (error) {
        console.log(error);
      }
    };
    // addNewProduct();
    console.log(formValues);
  };
  const sizesOptions = [
    { value: "25", label: "25" },
    { value: "25.5", label: "25.5" },
    { value: "26", label: "26" },
    { value: "26.5", label: "26.5" },
    { value: "27.5", label: "27.5" },
    { value: "28", label: "28" },
    { value: "28.5", label: "28.5" },
    { value: "29", label: "29" },
    { value: "29.5", label: "29.5" },
  ];

  const categoriesOptions = [
    { value: "man", label: "Man", color: "#B8D4E3" },
    { value: "woman", label: "Woman", color: "#F8C7CC" },
    { value: "running", label: "Running", color: "#00B8D9" },
    { value: "soccer", label: "Soccer", color: "#0052CC" },
    { value: "basketball", label: "Basketball", color: "#5243AA" },
  ];

  const stockOptions = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-center h-screen">
        <Sidebar />
        <div className="flex flex-col mt-2 w-5/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500">
          <div className="flex flex-col justify-between p-8 mr-4 w-full md:w-full lg:w-3/6 xl:w-3/6 ">
            <h2 className="font-semibold text-2xl">New Product</h2>
            <span className="mt-4 font-semibold text-base mb-2">
              Select a file:
            </span>
            <input
              className="p-2 border-2 border-slate-400 focus:outline-none rounded-md"
              type="file"
              name="myfile"
            />

            <div className="flex flex-col mt-4">
              <span className="font-semibold text-base">Title</span>
              <input
                name="title"
                className="p-2 border-2 border-slate-400 focus:outline-none rounded-md"
                onChange={handleInputChange}
                value={title}
              ></input>
            </div>

            <span className="font-semibold text-base mt-4">Description</span>
            <textarea
              className="p-2 border-2 border-slate-400 rounded-md focus:outline-none"
              cols="30"
              rows="5"
              name="desc"
              value={desc}
              onChange={handleInputChange}
            ></textarea>

            <div className="flex flex-col mt-4">
              <span className="font-semibold text-base">Price</span>
              <input
                name="price"
                className="p-2 border-2 border-slate-400 focus:outline-none rounded-md"
                onChange={handleInputChange}
                value={price}
              ></input>
            </div>

            <span className="font-semibold text-base mt-4">Sizes</span>
            <Select
              isMulti
              name="size"
              options={sizesOptions}
              className="basic-multi-select border-slate-400 border-2 rounded-md z-50"
              classNamePrefix="select"
              onChange={(e) => setSizes(e)}
            />
            <span className="font-semibold text-base mt-4">Stock</span>
            <Select
              name="inStock"
              options={stockOptions}
              className="basic-multi-select border-slate-400 border-2 rounded-md z-40"
              classNamePrefix="select"
              onChange={(e) => setStock(e)}
            />
            <span className="font-semibold text-base mt-4">Categories</span>
            <Select
              isMulti
              name="categories"
              options={categoriesOptions}
              className="basic-multi-select border-slate-400 border-2 rounded-md z-30"
              classNamePrefix="select"
              onChange={(e) => {
                setCategories(e);
              }}
            />

            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="flex items-center w-2/6 bg-green-200 p-2 mt-4 rounded-md cursor-pointer justify-around"
              >
                <FaPlus className="text-slate-700" width={24} height={24} />
                <span className="text-md">Add New Product</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
