import React from "react";
import { Link } from "react-router-dom";
import { logo, signupGoody } from "../../assets";
import CustomInput, {
  CustomButton,
  CustomLogin,
  CustomSupport,
} from "./CustomInput";

const SignupTemplate = () => {
  return (
    <div className="md:flex md:items-center">
      <div className="text-center mb-6 pt-4 w-full">
        <div className="md:mb-20 lg:mb-0">
          <img
            src={logo}
            alt="logo"
            className="w-[100px] h-[52.57px] mx-auto md:mx-0 mb-2"
          />
          <h3 className="text-contriMobile md:text-contriDesktop lg:text-introH1Desktop text-logoColor font-semibold w-[80%] md:w-full mx-auto mb-2 md:text-left">
            Stop Keeping Your Money Idle.
          </h3>
          <p className="text-signupharsh font-semibold text-googleDesktop md:text-contriMobile md:text-left">
            Zero Stress, Zero Worries.
          </p>
        </div>

        <div className="hidden md:flex md:justify-end">
          <img
            src={signupGoody}
            alt="Goody"
            className="w-[60%] md:w-[90%] lg:w-[90%]"
          />
        </div>
      </div>

      <div className="h-fit w-full">
        <form className="signup_form px-4 md:py-2">
          <div className="text-center mb-5 pt-3">
            <header className="font-semibold text-phoneMobileTwo text-logoColor">
              Create a Secure Account
            </header>
            <p className="text-logoColor font-[275] text-introPMobile">
              Save your money, So your money can save you
            </p>
          </div>

          {/* Custom input */}
          <div className="mx-auto w-[80%]">
            <CustomInput label="Full Name" />
            <CustomInput label="Email Address" />
            <CustomInput label="Phone Number" />
            <CustomInput label="Password" />
          </div>

          {/* custom button*/}
          <div className="flex justify-center mb-2">
            <CustomButton buttonDetails="Create Account" />
          </div>

          <div className="text-center mb-4">
            <p className="text-logoColor text-signinsm font-normal mb-2">
              Got an account with us?{" "}
              <Link
                to="/login"
                className="text-gold hover:text-logoColor ml-[1px]"
              >
                Sign in
              </Link>
            </p>

            <div className="flex justify-center items-center w-[87%] mx-auto gap-1">
              <div className="w-full h-[1px] bg-orColor" />
              <p className="font-semibold text-signinsm text-orColor border border-orColor rounded-[100%] px-[2px] py-[1px]">
                OR
              </p>
              <div className="w-full h-[1px] bg-orColor" />
            </div>
          </div>

          {/* custom Google Sign */}
          <div className="flex justify-center mb-3">
            <CustomLogin />
          </div>

          {/* custom CustomerSupport */}
          <div className="text-center pb-3">
            <CustomSupport support="Need help?" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupTemplate;
