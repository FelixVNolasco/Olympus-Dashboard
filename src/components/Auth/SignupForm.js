import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userReducer";
import Swal from "sweetalert2";

export const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex mt-6 justify-center h-screen">
      <div className="flex p-4 flex-col border-2 self-center w-5/6 sm:w-2/3 md:w-2/3 lg:w-3/5 xl:w-2/5 rounded-md">
        <h1 className="text-center mt-2 mb-6 sm:mb-4 text-2xl font-semibold">
          Sigunp
        </h1>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username is required";
            }
            if (!values.email) {
              errors.email = "Email is required";
            }
            if (!values.password) {
              errors.password = "Password is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await axios.post(
                "https://olympus-backend.vercel.app/api/auth/signup",
                values
              );
              const newUserData = response.data;
              dispatch(loginSuccess(newUserData));
              navigate("/");
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong",
                didOpen: () => {
                  navigate("/auth/signup");
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
                <label className="text-md" htmlFor="email">
                  Email
                </label>
                <Field
                  className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="email"
                  component="div"
                />
              </div>

              <div className="mt-4">
                <label className="text-md" htmlFor="password">
                  Password
                </label>
                <Field
                  className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500  w-full"
                  type="password"
                  name="password"
                />

                <ErrorMessage
                  className="text-red-500"
                  name="password"
                  component="div"
                />
              </div>

              <div className="flex justify-end mt-2">
                <button
                  className="p-3 bg-green-200 transition ease-in-out duration-300 hover:bg-green-300 rounded-md text-sm font-semibold cursor-pointer"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Signup
                </button>
              </div>
            </Form>
          )}
        </Formik>

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
