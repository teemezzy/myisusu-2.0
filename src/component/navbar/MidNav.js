import React from "react";
import { Link } from "react-router-dom";
import { navList } from "./navList";

const MidNav = ({ signUp, login}) => {

  

  return (
    <>
      <div className="items-center gap-5 hidden sm:flex">
        {navList.map((nav) => (
          <p
            key={nav.id}
            className="flex justify-center items-center text-logoColor font-semibold text-googleMobile lg:text-googleDesktop xl:text-contriMobile  hover:text-gold"
          >
            <Link to={nav.path} className="mr-1">
              {nav.name}
            </Link>
            <span className="cursor-pointer">{nav.icons}</span>
          </p>
        ))}
      </div>

      <div className="hidden sm:flex items-center gap-5">
        <button className="button text-gold hover:bg-gold hover:text-colorWhite xl:text-phoneMobileTwo" onClick={login}>
          Login
        </button>
        <button className="button bg-gold text-white hover:bg-white hover:text-gold xl:text-phoneMobileTwo" onClick={signUp}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default MidNav;
