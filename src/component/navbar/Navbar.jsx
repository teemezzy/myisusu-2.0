import React, { useState } from "react";
import { logo } from "../../assets/index";
import { Link } from "react-router-dom";
import MidNav from "./MidNav";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import DrawerNav from "./DrawerNav";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const mobileNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="relative flex justify-between items-center universal_padding py-2">
      <div>
        <Link to="/">
          <img src={logo} alt="frameone" height="50px" width="90px" />
        </Link>
      </div>

      <MidNav />

      <div className="sm:hidden cursor-pointer">
        {openNav ? (
          <GrClose className="mt-4 transition-all duration-300 rotate-180" size={25} onClick={mobileNav} />
        ) : (
          <AiOutlineMenu className="mt-4 transition-all duration-300 rotate-[360deg]" size={25} onClick={mobileNav} />
        )}
      </div>

      {openNav && (
        <DrawerNav openNav={openNav} setOpenNav={setOpenNav} />
      )}
    </nav>
  );
};

export default Navbar;
