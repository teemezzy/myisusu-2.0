import React from "react";
import { listimage } from "../../assets";


const PriorityList = ({ header, para }) => {
  return (
    <>
      <div className="flex pr-2 mb-5 xl:mb-14">
        <img src={listimage} alt="listing" className="w-[20px] h-[16px] mr-5" />
        <div className="-mt-1">
          <h1 className="text-googleDesktop font-bold text-logoColor mb-3">
            {header}
          </h1>
          <p className="text-introPMobile font-normal text-logoColor">
            {para}
          </p>
        </div>
      </div>
    </>
  );
};

export default PriorityList;
