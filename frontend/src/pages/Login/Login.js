import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import axios from "axios";
import isLoggedIn from "../../functions/isLoggedIn";


const Login = () => {
 // if user is logged in then taking directly to home page 
  if(isLoggedIn()){
   
    window.location.href = "/home"
  }

  const onGoogleSuccess = (response) => {
    const access_token = response.tokenId;
    axios({
       method: 'post',
       url: "user/auth/google",
       data: { 
          "token":response.tokenId
        }
    }).then((res) => {
      const { user, token } = res.data.data;
      
      // Save the JWT inside a cookie
      localStorage.setItem('token', token);

      window.location.href = "/home"
    }).catch((err) => {
       console.log(err,99);
     // throw new Error(err);
    })
  }

  const onFailure = (error) =>{
    console.log(error ,434334);
  
  }

  return (
    <div className="login">
      <div className="flex justify-center items-center p-10">
        <div className="container border w-[600px] border-indigo-500 rounded-md py-2 px-4">
          <div className="heading flex justify-center">
            <h2 className="text-2xl font-semibold text-indigo-500">Namaste , chaliye suru karteh hain !</h2>
          </div>
          <GoogleLogin
            clientId="199477342550-j14pfeol654ljk7f119lmenau59vdj2t.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onGoogleSuccess}
            onFailure={onFailure}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
