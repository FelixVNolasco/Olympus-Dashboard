import React from "react";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userReducer";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formValues;

  console.log(formValues);

  // const [errors, setErrors] = useState("");

  const isFormValid = () => {
    if (
      validator.isEmpty(username) ||
      validator.isEmpty(email) ||
      validator.isEmpty(password)
    ) {
      // setErrors("Todos los campos son obligatorios");
      return false;
    }
    // setErrors("");
    return true;
  };

  const signup = () => {
    try {
      if (isFormValid) {
        const trySignup = async () => {
          const response = await axios.post(
            "https://olympus-backend.vercel.app/api/auth/signup",
            formValues
          );
          console.log(response);
          navigate("/");
          const newUserData = response.data;
          dispatch(loginSuccess(newUserData));
        };
        trySignup();
      }
    } catch (error) {
      // setErrors("No ha sido posible realizar el registro");
    }
  };

  return (
    <div className="flex mt-6 justify-center h-screen">
      <div className="flex flex-col p-4 border-2 self-center w-5/6 sm:w-2/3 md:w-2/3 lg:w-3/5 xl:w-2/5 2xl:w-2/5 rounded-md">
        <h4 className="text-center mt-2 mb-6 sm:mb-4 text-2xl font-semibold">
          Signup
        </h4>

        <span className="text-md">Username</span>
        <input
          className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
          type="text"
          name="username"
          onChange={handleInputChange}
          autoComplete="false"
        />

        <span className="text-md">Email</span>
        <input
          className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
          type="text"
          name="email"
          onChange={handleInputChange}
          autoComplete="false"
        />

        <span className="text-md">Password</span>
        <input
          className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
          type="password"
          name="password"
          onChange={handleInputChange}
          autoComplete="false"
        />

        <div className="flex justify-end">
          <div
            className="p-3 bg-green-200 transition ease-in-out duration-300 hover:bg-green-300 rounded-md text-sm font-semibold cursor-pointer"
            onClick={signup}
          >
            Signup
          </div>
        </div>

        <div className="flex flex-col w-full items-center mt-2">
          <span className="text-md">You already have an account?</span>
          <Link className="mt-1" to={"/auth/login"}>
            <span className="font-semibold">Try Login 😁</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
