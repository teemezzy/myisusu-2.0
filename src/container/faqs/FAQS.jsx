import React from "react";
import { faqs, faqsarrow } from "../../assets";
import FaqsList from "./FaqsList";

const FAQS = () => {
  return (
    <div className="universal_padding bg-bgDarkWhite">
      <div className="flex items-center pt-4 sm:pt-7 lg:pt-9 mb-12">
        <img src={faqs} alt="FAQS" className="mr-4 w-[35px] h-[35px]" />
        <h1 className="text-introH1Mobile text-logoColor font-bold">FAQs</h1>
      </div>

      <div className="sm:grid sm:grid-cols-2 sm:mx-auto sm:gap-4 relative pb-8">
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
        <div className="sm:col-span-2 mx-auto sm:w-[50%]">
          <FaqsList
            header="How secure is my information?"
            nameOne="MyIsusu"
            bodyOne="was built with the security of your payment data in mind. Critical customer data is encrypted and securely stored. We do not store your card information as we work with a PCIDSS-compliant payment processor to handle all our customers’ card details. The PCIDSS is a standard guide, globally, that all reputable payment processors must adhere to."
          />
        </div>

        <div className="flex justify-center sm:absolute sm:w-fit right-9 sm:right-[50px] lg:right-[170px] xl:right-[340px] 2xl:right-[240px] bottom-9 sm:bottom-16">
          <p className="text-googleDesktop xl:text-phoneMobileTwo  text-gold font-semibold flex items-center">
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
