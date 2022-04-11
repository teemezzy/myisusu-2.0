import React from "react";
import { clusterone, priorityfour } from "../../assets";

const Cluster = () => {
  return (
    <div className="universal_padding">
      <div className="pt-5">
        <h1 className="text-logoColor text-contriMobile lg:text-contriDesktop font-bold mb-8 sm:w-[60%]">
          Thrift And Cluster Contributions Built On A Modern Platform.
        </h1>

        <div className="flex">
          <div className="w-[80%] sm:w-[40%]">
            <ul className="cluster_list">
              <li className="cluster_li">Thrift Contributions</li>
              <li className="cluster_li">Cluster Contributions</li>
              <li className="cluster_li">Automated Contributions</li>
            </ul>
          </div>

          <div className="mt-4 sm:-mt-[7rem] lg:-mt-[14rem] xl:-mt-[10rem] sm:ml-auto sm:w-fit sm:relative">
            <img src={priorityfour} alt="priority" className="w-[80px] lg:w-[110px] h-[160px] hidden sm:flex sm:ml-auto sm:-mb-[6rem]" />
            <img src={clusterone} alt="cluster" className="w-25% sm:w-[250px] lg:w-[370px] sm:h-[225px] lg:h-[320px] z-50 sm:mr-7 relative" />
            <img src={priorityfour} alt="priority" className="w-[80px] lg:w-[110px] h-[160px] hidden sm:flex -z-20 sm:-mt-[6rem] sm:-ml-[3.5rem]" />
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
};

export default Cluster;
