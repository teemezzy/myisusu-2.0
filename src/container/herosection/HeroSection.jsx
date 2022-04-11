import React from "react";
import { frameone, google } from "../../assets";

const HeroSection = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-5 h-screen overflow-hidden items-center universal_padding pt-6 sm:pt-0">
      <div className="mb-8 sm:mb-0 w-full items-start">
        <div className=" mb-4 md:mb-6">
          <h1 className="text-introH1Mobile md:text-contriDesktop lg:text-introH1Desktop font-semibold text-logoColor pb-2 w-10/12 sm:w-10/12 md:w-full">
            Stop Keeping Your <span className="text-gold">Money</span> Idle. <br />Start Contributing The <span className="text-gold">Isusu</span> Way.
          </h1>
          <p className="text-introPMobile xm:text-googleMobile lg:text-introPMobile text-logoColor font-normal sm:w-10/12 md:w-7/12">
            Build Your Discipline. Save At Your Own Pace,<br className="sm:hidden"/> With Your Own Cluster
          </p>
        </div>

        <div className="flex w-full lg:w-11/12 mb-2">
          <input type="text" className="flex flex-1 border border-gold rounded-2xl rounded-r pl-2 lg:pl-4 xl:pl-7 py-1 text-googleMobile sm:text-phoneMobile lg:text-googleDesktop" placeholder="Your Phone Number" />
          <button className="bg-gold border border-gold hover:bg-colorWhite hover:text-gold text-colorWhite text-googleMobile sm:text-phoneMobile lg:text-googleDesktop px-2 lg:px-2 xl:px-4 py-1 rounded-xl relative -left-3  transition-all duration-300">Download the app</button>
        </div>

        <div className="flex items-center gap-2">
            <img src={google} alt="Google" className="w-4 h-3 lg:w-5 lg:h-4" />
            <p className="text-googleMobile sm:text-phoneMobile lg:text-introPDesktop font-semibold text-googleColor">Google Play</p>
        </div>
      </div>
      <div className="w-full">
        <img src={frameone} alt="Hero Frame" className="w-full h-fit lg:w-image ml-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
