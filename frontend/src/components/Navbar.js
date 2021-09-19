import React, { useState, useLayoutEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Login from "./Login";
import {Link } from "react-router-dom";
import '../css/Navbar.css';
import {isAuth} from './auth.js';
export default function Navbar() {
  const [isLogout, setIsLogout] = useState(false);
  
  const onSignout = () =>{
  localStorage.removeItem("login");
  toast.success("successfully Logout ..");
   window.location = "/login";
  }
  useLayoutEffect(() => {
    setIsLogout(isAuth());
  }, [])
return(
  <>
    
<nav id='menu'>
  <input type='checkbox' id='responsive-menu' /><label></label>
  <ul>
    <li className="home-li"> <Link to="/home">Home</Link></li>
    {isLogout ? ( <li className="login-li"><a onClick={()=>onSignout()}>logout</a></li> ):<li className="login-li"><a><Login/></a></li>}
   
  </ul>
</nav>
<ToastContainer 
/>
</>
)
}