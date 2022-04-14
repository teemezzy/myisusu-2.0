import React from "react";
import { Link } from "react-router-dom";
import { navList } from "./navList";

const DrawerNav = ({ openNav, setOpenNav, signUp, login }) => {
  return (
    <>
      {navList.map((nav) => (
        <p
          key={nav.id}
          className="flex justify-center mb-12 items-center font-semibold text-googleMobile lg:text-googleDesktop hover:text-gold"
        >
          <Link to={nav.path} className="mr-1">
            {nav.name}
          </Link>
          <span className="cursor-pointer">{nav.icons}</span>
        </p>
      ))}

      <div className="sm:hidden items-center gap-10 flex flex-col">
        <button className="button text-gold hover:bg-gold hover:text-colorWhite" onClick={login}>
          Login
        </button>
        <button className="button bg-gold text-white hover:bg-white hover:text-gold" onClick={signUp}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default DrawerNav;
