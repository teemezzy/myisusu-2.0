import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiOutlineSave } from "react-icons/hi";
import { BsSafe } from "react-icons/bs";
import { BiIdCard } from "react-icons/bi";
import { BsCalculator } from "react-icons/bs";


export const sideList = [
 
  {
    id: 1,
    link: "Dashboard",
    path: "dashboard",
    icon: <MdDashboard />,
  },

  {
    id: 2,
    link: "Savings",
    path: "savings",
    icon: <HiOutlineSave />,
  },

  {
    id: 3,
    link: "Vault",
    path: "vault",
    icon: <BsSafe />,
  },
  {
    id: 4,
    link: "Referral ID",
    path: "/ref_id",
    icon: <BiIdCard />,
  },
  {
    id: 5,
    link: "Calculator",
    path: "calculator",
    icon: <BsCalculator />,
  },
];
