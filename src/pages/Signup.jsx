import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, signupGoody } from "../assets";
import CustomInput, {
  CustomButton,
  CustomLogin,
  CustomOr,
  CustomSupport,
} from "../component/signup/CustomInput";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const firstNameInput = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameInput = (e) => {
    setLastName(e.target.value);
  };

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const phoneInput = (e) => {
    setPhoneNumber(e.target.value);
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(
      `firstName: ${firstName}, lastName: ${lastName}, emailAddress: ${email}, phoneInput: ${phoneNumber}, password: ${password}`
    );
  };

  return (
    <div className="universal_padding h-screen md:flex md:justify-center md:items-center">
      <div className="md:flex md:items-center 2xl:gap-40">
        <div className="text-center mb-12 md:mb-0 pt-4 w-full">
          <div className="md:mb-20 lg:mb-0">
            <Link to="/" className="mb-4">
              <img
                src={logo}
                alt="logo"
                className="w-[100px] h-[52.57px] lg:w-[140px] lg:h-[80px] mx-auto md:mx-0 mb-2 lg:mb-4"
              />
            </Link>
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
              className="w-[60%] md:w-[90%] lg:w-[95%]"
            />
          </div>
        </div>

        <div className="h-fit w-full">
          <form className="signup_form px-4 md:py-2" onSubmit={submit}>
            <div className="text-center mb-5 pt-3">
              <header className="font-semibold text-signMobile md:text-contriMobile lg:text-contriDesktop text-logoColor">
                Create a Secure Account
              </header>
              <p className="text-logoColor font-[275] text-introPMobile md:text-signinlg lg:text-phoneMobileTwo">
                Save your money, So your money can save you
              </p>
            </div>

            {/* Custom input */}
            <div className="mx-auto w-[80%]">
              <CustomInput
                label="First Name"
                inputType="text"
                value={firstName}
                textInput={firstNameInput}
              />
              <CustomInput
                label="Last Name"
                inputType="text"
                value={lastName}
                textInput={lastNameInput}
              />
              <CustomInput
                label="Email Address"
                inputType="text"
                value={email}
                textInput={emailInput}
              />
              <CustomInput
                label="Phone Number"
                inputType="text"
                value={phoneNumber}
                textInput={phoneInput}
              />
              <CustomInput
                label="Password"
                inputType="password"
                value={password}
                textInput={passwordInput}
              />
            </div>

            {/* custom button*/}
            <div className="flex justify-center mb-2">
              <CustomButton buttonDetails="Create Account" />
            </div>

            <div className="text-center mb-4 md:mb-6">
              <p className="text-logoColor text-signinsm md:text-signinlg lg:text-phoneMobileTwo font-normal mb-2">
                Got an account with us?{" "}
                <Link
                  to="/login"
                  className="text-gold hover:text-logoColor ml-[1px]"
                >
                  Sign in
                </Link>
              </p>

              <div className="flex justify-center items-center w-[87%] mx-auto gap-1">
                <CustomOr />
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
    </div>
  );
};

export default Signup;
