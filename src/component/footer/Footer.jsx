import React from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="universal_padding">
      <img src={logo} alt="logo" className="w-[100px] h-[46.75px] mb-4" />

      <div className="grid grid-cols-2 md:grid-cols-5">
        <div className="footer_div">
          <h3 className="footer_header">Company</h3>
          <ul className="footer_ui">
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Press</Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">Ambassadors</Link>
            </li>
            <li>
              <Link to="">Privacy</Link>
            </li>
            <li>
              <Link to="">Terms</Link>
            </li>
          </ul>
        </div>
        <div className="footer_div">
          <h3 className="footer_header">Product</h3>
          <ul className="footer_ui">
            <li>
              <Link to="">Thrift Savings</Link>
            </li>
            <li>
              <Link to="">Cluster Savings</Link>
            </li>
            <li>
              <Link to="">Automated Savings</Link>
            </li>
            <li>
              <Link to="">Features</Link>
            </li>
            <li>
              <Link to="">Got a suggestion?</Link>
            </li>
          </ul>
        </div>
        <div className="footer_div">
          <h3 className="footer_header">Resources</h3>
          <ul className="footer_ui">
            <li>
              <Link to="">Customer Stories</Link>
            </li>
            <li>
              <Link to="">Media</Link>
            </li>
            <li>
              <Link to="">Security</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Help Center</Link>
            </li>
          </ul>
        </div>
        <div className="footer_div md:col-span-2">
          <h3 className="footer_header">Support</h3>
          <ul className="footer_ui">
            <li>
              <Link to="">Support support@myisusu.com</Link>
            </li>
          </ul>
        </div>
      </div>


      <div>
          
      </div>
    </div>
  );
};

export default Footer;
