import React, { useState } from "react";
import { logo } from "../../assets/index";
import { Link } from "react-router-dom";
import MidNav from "./MidNav";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import DrawerNav from "./DrawerNav";

const Navbar = ({ signUp, login}) => {
  const [openNav, setOpenNav] = useState(false);

  const mobileNav = () => {
    setOpenNav(!openNav);
  };


  return (
    <nav className="relative flex justify-between items-center universal_padding py-2">
      <div>
        <Link to="/">
          <img src={logo} alt="frameone" className="w-[90px] h-[50px] xl:w-[120px] xl:h-[70px]" />
        </Link>
      </div>

      <MidNav signUp={signUp} login={login} />

      <div className="sm:hidden cursor-pointer bg-transparent">
        {openNav ? (
          <GrClose
            className="mt-4 transition-all duration-300 rotate-180"
            size={25}
            onClick={mobileNav}
          />
        ) : (
          <AiOutlineMenu
            className="mt-4 transition-all duration-300 rotate-[360deg]"
            size={25}
            onClick={mobileNav}
          />
        )}
      </div>

      {openNav && (
        <div
          className={`absolute top-[65px] pt-14 right-0 transition-all duration-500 z-50 h-screen w-[60%] bg-logoColor text-white sm:hidden`}
          onClick={() => setOpenNav(!openNav)}
        >
          <DrawerNav
            openNav={openNav}
            setOpenNav={setOpenNav}
            signUp={signUp}
            login={login}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
