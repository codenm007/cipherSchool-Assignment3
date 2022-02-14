import React from "react";
import { Link } from "react-router-dom";
import {NavDropdown,Button} from 'react-bootstrap';
import isLoggedIn from "../../functions/isLoggedIn";
import LogOut from '../../functions/logout';
const Navbar = () => {

  const LoginHide = () =>{
    if(window.location.pathname !== "/"){
      
      return(
        <>
        <Link to = "/" className="ml-auto" >
            
        {isLoggedIn() ?(
      <NavDropdown
      id="nav-dropdown-dark-example"
      title={
        <img src = {isLoggedIn().profilePic} width="40" height="40" style = {{borderRadius:"50%"}}/>
      }
      menuVariant="dark"
    >
      <NavDropdown.Item onClick = {()=>LogOut()}>Log out</NavDropdown.Item>
     
    </NavDropdown>
      ):(<Button>Sign In/Log In</Button>)}
        </Link>
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

          
          <Link to="/home">
            <p className="text-2xl text-indigo-600 font-semibold">
              Home
            </p>
          </Link>

          {LoginHide()}

        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
