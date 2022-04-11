import React from "react";

const FaqsList = ({ header, nameOne, nameTwo, bodyOne, bodyTwo }) => {
  return (
    <>
      <div className="faqs_body pt-7 pb-14 pl-6 mb-7 sm:pb-0 sm:h-[200px] lg:pb-0 lg:w-[400px] lg:h-[180px]">
        <h2 className="text-white font-bold text-introPDesktop mb-4">
          {header}
        </h2>
        <p className="text-googleMobile text-colorWhite font-normal w-[97%]">
          <span className="text-gold font-semibold">{nameOne}</span> {bodyOne}{" "}
          <span className="text-gold font-semibold">{nameTwo}</span> {bodyTwo}
        </p>
      </div>
    </>
  );
};

export default FaqsList;
