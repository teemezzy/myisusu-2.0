import React from "react";
import {
  priorityfour,
  priorityone,
  prioritythree,
  prioritytwo,
} from "../../assets";
import PriorityList from "./PriorityList";

const Priority = () => {
  return (
    <div className="w-full bg-bgWhite universal_padding">
      <div className="pt-5 lg:pt-12 2xl:pt-28 lg:pb-6">
        <h1 className="text-contriMobile lg:text-contriDesktop xl:text-contriDesktop text-logoColor font-bold mb-3 lg:w-[40%] xl:w-[38%]">
          Keeping your money safe is our priority.
        </h1>
        <p className="text-introPMobile lg:text-phoneMobileTwo text-logoColor font-medium mb-5 sm:w-3/4 lg:w-6/12">
          Trust is our currency. We are committed to the security of your money
          and the protection of your account.
        </p>
        <button className="text-gold border-none text-introPMobile lg:text-signinlg xl:mb-2">
          LEARN MORE
        </button>

        <div className="lg:w-fit lg:h-[10rem] ml-auto lg:-mt-24 xl:-mt-44 2xl:-mt-36 2xl:-mr-[102px] mb-auto">
          <div className="flex h-[120px] w-fit ml-auto relative">
            <img
              src={priorityone}
              alt="priority_image"
              className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px] z-30"
            />
            <img
              src={priorityfour}
              alt="priority_image"
              className="w-[120px] h-[120px] lg:w-[76px] lg:h-[103px] xl:w-[122px] xl:h-[205px] -ml-14 -mt-8"
            />
          </div>
        </div>

        <div className="mt-16 lg:mt-0">
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-2 lg:col-span-3 lg:w-[81%] xl:w-[71%] 2xl:w-[80%] sm:gap-2">
            <PriorityList
              header="Bank-Grade Security"
              para="We are PCI-DSS compliant to ensure security of your data electronically. All cards and bank data are encrypted to prevent unauthorised access to sensitive information."
            />

            <PriorityList
              header="Two-Factor Authentication (2FA)"
              para="2FA is an extra layer of protection to ensure the security of your account beyond just a username and password. All verifications for key transactions pass through the 2FA process on MyIsusu."
            />

            <PriorityList
              header="Automated Contributions"
              para="Build a dedicated savings faster on your terms automatically or manually."
            />

            <PriorityList
              header="Investment Opportunities"
              para="Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities."
            />
          </div>
        </div>

        <div className="relative pl-12 lg:mr-auto lg:pl-0 lg:flex lg:flex-row lg:justify-end lg:-mt-[15rem] lg:h-fit xl:mr-5 2xl:-mr-20">
          <div className="flex flex-col">
            <img
              src={prioritytwo}
              alt="priority_image"
              className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px] z-50 -mb-16 lg:ml-7 xl:-mr-16 xl:-mt-14"
            />
            <img
              src={priorityfour}
              alt="priority_image"
              className="w-[64px] h-[101px] -ml-7 lg:hidden"
            />
            <img
              src={prioritythree}
              alt="priority_image"
              className="w-[190px] h-[190px] xl:w-[300px] xl:h-[300px] -ml-7 hidden lg:block lg:mt-[4rem] lg:ml-[2rem] lg:z-50 xl:mt-[1rem] xl:mr-[0]"
            />
            <img
              src={priorityfour}
              alt="priority_image"
              className="w-[64px] h-[101px] xl:w-[122px] xl:h-[205px] lg:ml-[1rem] lg:-mt-[4rem] xl:-mt-[9rem] hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priority;
