import React from "react";
import { Link } from "react-router-dom";
import { navList } from "./navList";

const DrawerNav = () => {
  return (
    <>
      <div className="absolute top-20 hidden">
        {navList.map((nav) => (
          <p
            key={nav.id}
            className="flex justify-center items-center mb-4 text-logoColor font-semibold text-googleMobile lg:text-googleDesktop hover:text-gold"
          >
            <Link to={nav.path} className="mr-1">
              {nav.name}
            </Link>
            <span className="cursor-pointer">{nav.icons}</span>
          </p>
        ))}

        <div className="hidden sm:flex items-center gap-5">
          <button className="button text-gold hover:bg-gold hover:text-colorWhite">
            Login
          </button>
          <button className="button bg-gold text-white hover:bg-white hover:text-gold">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default DrawerNav;
