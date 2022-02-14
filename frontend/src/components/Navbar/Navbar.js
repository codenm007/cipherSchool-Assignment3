import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-4 py-4 text-gray-700">
        <div className="logo flex gap-5 justify-around items-center">
          <Link to="/">
            <h2 className="text-2xl text-indigo-600 font-semibold">Company</h2>
          </Link>
          
          <Link to="/browse">
            <p className="text-lg hover:text-indigo-500 transform duration-300">
              Community
            </p>
          </Link>
          <Link to="/create">
            <p className="text-lg hover:text-indigo-500 transform duration-300">
              My Posts
            </p>
          </Link>
        </div>

        {/* <div className="quickbits">
          <div className="w-full flex gap-3 items-center">
            <Link to="/login">
              <button className="bg-indigo-500 px-3 py-1 rounded-md text-white hover:bg-indigo-600 transform duration-300">
                <p className=" text-lg">Login</p>
              </button>
            </Link>
          </div>
        </div> */}
      </div>
      <hr />
    </>
  );
};

export default Navbar;
