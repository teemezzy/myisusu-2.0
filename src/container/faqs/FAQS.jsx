import React from "react";
import { faqs, faqsarrow } from "../../assets";
import FaqsList from "./FaqsList";

const FAQS = () => {
  return (
    <div className="universal_padding bg-bgDarkWhite">
      <div className="flex items-center pt-4 sm:pt-7 lg:pt-9 mb-12">
        <img src={faqs} alt="FAQS" className="mr-4 w-[35px] h-[35px]" />
        <h1 className="text-introH1Mobile lg:text-contriDesktop 2xl:text-contriDesktop44 text-logoColor font-bold">
          FAQs
        </h1>
      </div>

      <div className="sm:grid sm:grid-cols-2 sm:mx-auto sm:gap-4 relative pb-8 max-w-7xl">
        <div>
          <FaqsList
            header="What Is MyIsusu?"
            nameOne="MyIsusu"
            nameTwo="MyIsusu"
            bodyOne="helps make contributing and investing seamless."
            bodyTwo="takes away the stress and planning required to contribute and invest on a regular basis through its automated and easy-to-use platform"
          />
        </div>
        <div>
          <FaqsList
            header="Why Should I Contribute With MyIsusu?"
            nameOne="MyIsusu"
            bodyOne="is suitable for anyone who wants the discipline to keep their savings and investments for a long period of time without tampering with them."
          />
        </div>
        <div className="sm:col-span-2 mx-auto md:pl-24 2xl:pl-36 md:flex">
          <FaqsList
            header="How secure is my information?"
            nameOne="MyIsusu"
            bodyOne="was built with the security of your payment data in mind. Critical customer data is encrypted and securely stored. We do not store your card information as we work with a PCIDSS-compliant payment processor to handle all our customers’ card details. The PCIDSS is a standard guide, globally, that all reputable payment processors must adhere to."
          />

          <p className="text-googleDesktop lg:text-phoneMobileTwo xl:text-introH1Mobile text-gold w-fit md:pt-28 md:ml-4 font-semibold flex items-center xl:mt-28">
            See All FAQs{" "}
            <span className="ml-2">
              <img src={faqsarrow} alt="arrow" />
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default FAQS;
