import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="flex justify-center items-center p-10">
        <div className="container border w-[600px] border-indigo-500 rounded-md py-2 px-4">
          <div className="heading flex justify-center">
            <h2 className="text-2xl font-semibold text-indigo-500">Sign Up</h2>
          </div>
          <div className=" py-4 space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border border-gray-300 rounded-md w-full outline-none py-2 px-3 text-gray-600
               focus:border-indigo-500 transform duration-300"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md w-full outline-none py-2 px-3 text-gray-600
               focus:border-indigo-500 transform duration-300"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md w-full outline-none py-2 px-3 text-gray-600
              focus:border-indigo-500 transform duration-300"
            />
            <button
              className=" outline-none px-4 py-2 bg-indigo-500 rounded-md text-white w-full hover:bg-indigo-600
            transform duration-300"
            >
              Sign Up
            </button>
            <p>
              Already have an account{" "}
              <span className="text-indigo-500 cursor-pointer">
                <Link to="/">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
