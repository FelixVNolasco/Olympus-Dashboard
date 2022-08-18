import React from "react";
// import { useState } from "react";

// import validator from "validator";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../../redux/userReducer";
// import { useForm } from "../../hooks/useForm";

// import Swal from 'sweetalert2'
// import axios from "axios";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const [formValues, handleInputChange] = useForm({
  //   username: "",
  //   password: "",
  // });

  // const { username, password } = formValues;

  // const [showPassword, setshowPassword] = useState(false);
  // const handleShowPassword = () => {
  //   setshowPassword(!showPassword);
  // }

  // const [errors, setErrors] = useState("");

  // const isFormValid = () => {
  //   if (validator.isEmpty(username) || validator.isEmpty(password)) {
  //     setErrors("All fields are required");
  //     return false;
  //   }
  //   else {
  //     setErrors("");
  //     return true;
  //   }
  // };

  // const login = async () => {
  //   try {
  //     if (isFormValid) {
  //       const response = await axios.post(
  //         "https://olympus-backend.vercel.app/api/auth/login",
  //         formValues
  //       );
  //       const userData = response.data;
  //       dispatch(loginSuccess(userData));
  //       navigate("/");
  //     }
  //   } catch (error) {
  //       setErrors("Wrong user or password");
  //       console.log(errors);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: 'Something went wrong',
  //         didOpen: () => {
  //           navigate("/auth/login");
  //         },
  //       });
  //   }
  // };

  return (
    <LoginForm />
    // <div className="flex mt-6 justify-center h-screen">
    //   <div className="flex p-4 flex-col border-2 self-center w-5/6 sm:w-2/3 md:w-2/3 lg:w-3/5 xl:w-2/5 rounded-md">
    //     <h4 className="text-center mt-2 mb-6 sm:mb-4 text-2xl font-semibold">
    //       Login
    //     </h4>

    //     <span className="text-md">Username</span>
    //     <input
    //       className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
    //       type="text"
    //       name="username"
    //       onChange={handleInputChange}
    //       autoComplete="false"
    //     />

    //     <span className="text-md">Password</span>
    //     <div className="flex justify-between items-center mb-4">
    //       <input
    //         className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500  w-full"
    //         type={showPassword ? 'text' : 'password'}
    //         name="password"
    //         onChange={handleInputChange}
    //         autoComplete="false"
    //       />
    //       {
    //         showPassword ?
    //           <FaEye className="h-6 w-6 ml-2 cursor-pointer" onClick={handleShowPassword} />
    //           :
    //           <FaEyeSlash className="h-6 w-6 ml-2 cursor-pointer" onClick={handleShowPassword} />
    //       }

    //     </div>

    //     <div className="flex justify-end">
    //       <div
    //         className="p-3 bg-green-200 transition ease-in-out duration-300 hover:bg-green-300 rounded-md text-sm font-semibold cursor-pointer"
    //         onClick={login}
    //       >
    //         Login
    //       </div>
    //     </div>

    //     <div className="flex flex-col w-full items-center mt-2">
    //       <span className="text-md">Don't have an account yet?</span>
    //       <Link className="mt-1" to={"/auth/signup"}>
    //         <span className="font-semibold">Create a new one here 🐧</span>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};
