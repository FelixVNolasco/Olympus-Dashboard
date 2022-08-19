import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userReducer";
import Swal from "sweetalert2";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setshowPassword] = useState(false);
  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  return (
    <div className="flex mt-6 justify-center h-screen">
      <div className="flex p-4 flex-col border-2 self-center w-5/6 sm:w-2/3 md:w-2/3 lg:w-3/5 xl:w-2/5 rounded-md">
        <h1 className="text-center mt-2 mb-6 sm:mb-4 text-2xl font-semibold">
          Login
        </h1>
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username is required";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              setSubmitting(true);
              const response = await axios.post(
                "https://olympus-backend.vercel.app/api/auth/login",
                values
              );
              const userData = response.data;
              dispatch(loginSuccess(userData));
              navigate("/");
              setSubmitting(false);
            } catch (error) {
              setSubmitting(false);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong",
                didOpen: () => {
                  navigate("/auth/login");
                },
              });
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="text-md" htmlFor="username">
                Username
              </label>
              <Field
                className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full"
                type="username"
                name="username"
              />
              <ErrorMessage
                className="text-red-500"
                name="username"
                component="div"
              />
              <div className="mt-4">
                <label className="text-md" htmlFor="password">
                  Password
                </label>
                <div className="flex justify-between items-center">
                  <Field
                    className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500  w-full"
                    type={showPassword ? "text" : "password"}
                    name="password"
                  />
                  {showPassword ? (
                    <FaEye
                      className="h-6 w-6 ml-2 cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <FaEyeSlash
                      className="h-6 w-6 ml-2 cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  )}
                </div>
                <ErrorMessage
                  className="text-red-500"
                  name="password"
                  component="div"
                />
              </div>

              <div className="flex justify-end mt-4">
                <button
                  className="p-3 bg-green-200 transition ease-in-out duration-300 hover:bg-green-300 rounded-md text-sm font-semibold cursor-pointer"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="flex flex-col w-full items-center mt-2">
          <span className="text-md">Don't have an account yet?</span>
          <Link className="mt-1" to={"/auth/signup"}>
            <span className="font-semibold">Create a new one here 🐧</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
