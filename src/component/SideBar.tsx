import React from "react";
import { FaDollarSign, FaHome, FaBusinessTime, FaCommentDollar } from "react-icons/fa";

import { SideBarcss } from "./SideBar.css";

function SideBar() {
  return (
    <SideBarcss>
       <div className="sidebtn">
        <h1> Hassaan Khan </h1>
      </div>
      <div> <span className='email'> hassaankhan235@hotmail.com </span> </div>

      <div className="sidebtn">
        <FaHome className="icon" />
        <span className="btn-name">Home</span>
      </div>

      <div className="sidebtn">
        <FaBusinessTime className="icon" />
        <span className="btn-name">Transactions</span>
      </div>

      <div className="sidebtn">
        <FaDollarSign className="icon" />
        <span className="btn-name">Spending</span>
      </div>

      <div className="sidebtn">
        <FaCommentDollar className="icon" />
        <span className="btn-name">Settings</span>
      </div>
    </SideBarcss>
  );
}

export default SideBar;
