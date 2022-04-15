import React from "react";

const Signup = () => {
  return (
    <div className="sm:px-0 signup mb-6 w-full">
      <form className="pt-7 px-7 sm:pr-0 sm:w-full sm:grid sm:grid-cols-2 lg:px-16 lg:pt-10 xl:px-40 xl:py-8 xl:pt-14 2xl:px-[220px]">
        <div className="mb-7">
          <h1 className="text-signMobile text-colorWhite font-bold mb-6 lg:text-contriDesktop xl:text-contriDesktop44">
            Sign Up For Free.
            <br /> Start Contributing Now.
          </h1>
        </div>

        <div className="pb-11 sm:flex sm:relative sm:pr-3 sm:mt-5 lg:mt-10 h-fit">
          <input
            type="text"
            className="border border-gold rounded-[15px] pt-3 pb-2 md:pb-3 pl-6 text-googleMobile sm:text-phoneMobile lg:text-googleDesktop xl:text-phoneMobileTwo w-full text-bgDarkWhite bg-logoColor mb-5 md:py-2 sm:pl-3"
            placeholder="Email Address....."
          />
          <button className="bg-bgWhite text-gold border border-gold hover:text-white hover:bg-gold text-introPDesktop sm:text-footermd xl:text-phoneMobileTwo rounded-[15px] px-[26px] sm:px-[16px] py-[6px] sm:py-2 md:py-[11px] xl:py-[10px] sm:absolute sm:right-3 sm:top-0 transition-all duration-300">
            Sign Up For Free
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
