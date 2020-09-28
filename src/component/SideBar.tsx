import React from "react";
import {  FaHome, FaBusinessTime, FaCommentDollar } from "react-icons/fa";
import { Link } from 'react-router-dom'

import { SideBarcss, LinkStyle } from "./SideBar.css";

function SideBar() {
  return (
    
    <SideBarcss>
      <div className='side-container'>
       <div className="Myname">
        <h1> Hassaan Khan </h1>
      </div>
      <div> <span className='email'> hassaankhan235@hotmail.com </span> </div>

      <div className = 'sidebar-icon-container'>
      <Link to='/' style={LinkStyle}>
      <div className="sidebtn">
        <FaHome className="icon" />
        <div className="btn-name">
          Home  </div>
      </div></Link>

      <Link to='/transactions' style={LinkStyle}>
      <div className="sidebtn">
        <FaBusinessTime className="icon" />
        <span className="btn-name">
         Transactions 
        </span>
      </div></Link>
      
      <Link to= '/setting' style= {LinkStyle}>
      <div className="sidebtn">
        <FaCommentDollar className="icon" />
        <span className="btn-name">Settings</span>
      </div>
      </Link>

      </div>
      </div>
    </SideBarcss>
    
  );
}

export default SideBar;
