import React from "react";

const Signup = () => {
  return (
    <div className="px-3 sm:px-0 signup">
      <form className="pt-7 px-7 sm:pr-0 sm:w-full sm:grid sm:grid-cols-2 lg:px-16 lg:pt-10 xl:px-40 xl:pt-14 2xl:px-[360px]">
        <div className="mb-7">
          <h1 className="text-signMobile text-colorWhite font-bold mb-6 lg:text-contriDesktop xl:text-contriDesktop44">
            Sign Up For Free.
            <br /> Start Contributing Now.
          </h1>
        </div>

        <div className="pb-11 sm:flex sm:relative sm:pr-3">
          <input
            type="text"
            placeholder="Your Phone Number....."
            className="text-phoneMobile font-light text-bgDarkWhite border-2 border-gold rounded-[15px] bg-logoColor w-full pt-2 pl-6 mb-7 sm:text-introPMobile sm:py-1 sm:pl-4 sm:h-fit mt-8 xl:py-2 2xl:py-3"
          />

          <button className="text-introPDesktop text-gold font-semibold bg-bgWhite rounded-[15px] px-[26px] py-[6px] sm:text-googleDesktop sm:px-[17px] sm:py-[4px] sm:absolute sm:bottom-[73px] sm:right-3 lg:bottom-[90px] xl:py-[8px] xl:bottom-[112px] 2xl:py-[13px] 2xl:bottom-[104px]">
            Sign Up For Free
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
