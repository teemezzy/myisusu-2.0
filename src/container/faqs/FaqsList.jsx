import React from "react";

const FaqsList = ({ header, nameOne, nameTwo, bodyOne, bodyTwo }) => {
  return (
    <>
      <div className="faqs_body pt-7 md:pt-5 lg:pt-4 pb-14 pl-6 mb-7 sm:pb-0 md:w-[348px] 2xl:w-[500px] 2xl:h-[310px] sm:h-[200px] lg:pb-0 lg:w-[460px] lg:h-[200px] xl:w-[550px] xl:h-[290px]">
        <h2 className="text-white font-bold text-introPDesktop lg:text-contriMobile mb-4">
          {header}
        </h2>
        <p className="text-googleMobile xl:text-phoneMobileTwo text-colorWhite font-normal w-[97%]">
          <span className="text-gold font-semibold">{nameOne}</span> {bodyOne}{" "}
          <span className="text-gold font-semibold">{nameTwo}</span> {bodyTwo}
        </p>
      </div>
    </>
  );
};

export default FaqsList;
