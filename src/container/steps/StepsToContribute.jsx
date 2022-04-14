import React from "react";
import { steps } from "./steps";

const StepsToContribute = () => {
  return (
    <div className="py-7 sm:grid sm:grid-cols-2 gap-2 sm:gap-6 lg:gap-9 bg-bgDarkWhite universal_padding">
      <h1 className="text-center sm:text-left text-contriMobile md:text-introH1Mobile lg:text-contriDesktop 2xl:text-introH1Desktop text-logoColor font-semibold w-full h-fit break-inside-avoid mt-2">
        Start Contributing In These Few Steps
      </h1>

      {steps.map((step) => (
        <div
          className={`mb-6 ${
            step.id === 2 ? "sm:-mt-[17rem] lg:-mt-[28rem]" : step.id === 4 ? "sm:-mt-[17rem] lg:-mt-[28rem]" : step.id === 3 ? "" : ""
          } w-fit mx-auto sm:mx-0 mt-2`}
          key={step.id}
        >
          <p className="start_number border_width">{step.number}</p>
          <div
            className={`pt-7 body-shadow ${
              step.id === 1
                ? "bg-bgcreateone"
                : step.id === 2
                ? "bg-white"
                : step.id === 3
                ? "bg-bgjoinone"
                : step.id === 4
                ? "bg-bgstartone"
                : ""
            } w-[280px] h-[380px] sm:w-[340px] sm:h-[350px] lg:w-[450px] lg:h-[500px] mx-auto sm:mx-0 sm:relative`}
          >
            <div className="mb-4 pl-6">
              <img
                src={step.firstImage}
                alt={step.header}
                className={`p-7 ${
                  step.id === 1
                    ? "bg-bgcreate"
                    : step.id === 2
                    ? "bg-bgactivate"
                    : step.id === 3
                    ? "bg-bgjoin"
                    : step.id === 4
                    ? "bg-bgstart"
                    : "bg-bgcreate"
                } rounded-[100%]`}
              />
            </div>
            <div className="mb-7 pl-6">
              <p className="text-googleDesktop sm:text-introH1Mobile lg:text-contriDesktop text-logoColor font-bold mb-3">
                {step.header}
              </p>
              <p className="text-googleMobile sm:text-introPDesktop lg:text-contriMobile text-logoColor font-normal w-4/5">
                {step.headerTwo}
              </p>
            </div>
            <div className="flex items-baseline">
              <img
                src={step.secondImage}
                alt={step.header}
                className={`${
                  step.id === 1
                    ? "ml-auto sm:absolute sm:right-0"
                    : step.id === 2
                    ? "mr-auto"
                    : step.id === 3
                    ? "mr-auto sm:absolute sm:right-0"
                    : step.id === 4
                    ? "ml-auto"
                    : "mr-auto"
                } sm:absolute sm:bottom-0 lg:w-[300px] sm:lg-[225px]`}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center sm:pl-6 sm:relative">
        <button className=" text-googleDesktop lg:text-contriMobile text-colorWhite bg-bgcontribute rounded-[15px] py-2 px-5 lg:py-3 lg:px-7 sm:absolute sm:bottom-6 xl:bottom-20 sm:left-0 xl:left-31 hover:text-gold hover:bg-white transition-all duration-300">
          Start Contributing
        </button>
      </div>
    </div>
  );
};

export default StepsToContribute;
