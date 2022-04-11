import React from "react";
import { logo } from "../../assets/index";
import { Link } from "react-router-dom";
import MidNav from "./MidNav";
import { AiOutlineMenu } from "react-icons/ai"
import DrawerNav from "./DrawerNav";

const Navbar = () => {

    // const [openNav, setOpenNav] = useState(false)

  return (
    <nav className="relative flex justify-between items-center universal_padding py-2 ">
      <div>
        <Link to="/">
          <img src={logo} alt="frameone" height="50px" width="90px" />
        </Link>
      </div>
      
      <MidNav />

      <div className="sm:hidden">
        <AiOutlineMenu className="mt-4" size={25} />
      </div>

      <DrawerNav />
    </nav>
  );
};

export default Navbar;
