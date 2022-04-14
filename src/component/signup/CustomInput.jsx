import { TextField } from "@mui/material";
import React from "react";
import { googleSignin } from "../../assets";
import { Link } from "react-router-dom";

const CustomInput = ({ label }) => {
  return (
    <div className="mb-6">
      <TextField
        id={label}
        label={label}
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{
          style: {
            fontSize: "12px",
          },
        }}
      />
    </div>
  );
};

export default CustomInput;

export const CustomLogin = ({ login }) => {
  return (
    <>
      <button className="flex items-center gap-2 border border-logoColor hover:bg-blue-300 rounded-[20px] pl-4 pr-11 py-1">
        <img src={googleSignin} alt="Google" className="w-[28px] h-[28px]" />
        <p className="text-logoColor text-phoneMobile font-semibold">
          Sign In With Google
        </p>
      </button>
    </>
  );
};

export const CustomSupport = ({ support }) => {
  return (
    <>
      <p className="text-signinsm font-medium text-logoColor">
        {support}{" "}
        <Link to="" className="text-gold hover:text-logoColor">
          Contact Support
        </Link>
      </p>
    </>
  );
};

export const CustomButton = ({ buttonDetails }) => {
  return (
    <>
      <button className="bg-logoColor font-bold text-white text-googleMobile hover:bg-gold hover:text-logoColor rounded-[20px] py-[7px] px-5">
        {buttonDetails}
      </button>
    </>
  );
};
