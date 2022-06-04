import React, { useState } from "react";
import { Sidebar } from ".";
import { Dashboard, Savings, ReferralID, Vault, Calculator } from "../pages";
import { NavLink, Outlet} from "react-router-dom";

const MainDashboard = () => {
  return (
    <div>

        <div className="w-60 fixed sidelayout">
          <Sidebar />
          <Outlet/>
        </div>
  
      <div className="sidelayou">
        {/* <NavLink to='dashboard'><Dashboard/></NavLink>
        <NavLink to='savings'><Savings/></NavLink> */}
        
      
      </div>
    </div>
  );
};

export default MainDashboard;
