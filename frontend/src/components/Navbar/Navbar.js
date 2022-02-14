import React from "react";
import { Link } from "react-router-dom";

import isLoggedIn from "../../functions/isLoggedIn";
import LogOut from '../../functions/logout';
import { Fragment } from 'react'
import {  Menu, Transition } from '@headlessui/react'
import Logo from '../../assets/5455637.png';
const Navbar = () => {

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const LoginHide = () =>{
    if(window.location.pathname !== "/"){
      
      return(
    <>
    <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={isLoggedIn().profilePic}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a 
                          onClick = {()=>LogOut()}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
    </>
      )
    }else{
      
      return(
        <div></div>
      )
    }
  }
  return (
    <>
      <div className="w-full flex justify-between items-center px-4 py-4 text-gray-700">
        <div className="logo flex gap-5 justify-around items-center">

          
          <Link to="/home" className = "flex">
            <img src = {Logo} width="30px" height ="auto" />
            <p className="text-2xl text-indigo-600 font-semibold px-2">
              ReceipeWala
            </p>
            
          </Link>

          

        </div>
        <div>
          <LoginHide />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
