import React from "react";

const Download = () => {
  return (
    <section className="mt-32">
      <div className="text-center lg:w-2/5 w-10/12 mx-auto">
        <h2 className="lg:text-4xl text-3xl font-medium">
          Download the extension
        </h2>
        <p className="text-lg text-grayish-blue mt-5">
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
      </div>

      <div className=" flex md:flex-row flex-col  justify-center items-center mt-10 gap-x-10">
        <div className=" flex  flex-col text-center shadow-lg rounded-xl mb-4 md:mb-0">
          <img
            src="/images/logo-chrome.svg"
            alt="Chrome logo"
            className="w-2/5 mx-auto my-10"
          />
          <h3 className=" text-xl font-medium text-very-dark-blue mb-3">
            Add to Chrome
          </h3>
          <span className=" text-grayish-blue mb-8 text-sm">
            Minimum version 6.2
          </span>
          <img src="/images/bg-dots.svg" alt="" />
          <button className="text-sm hover:bg-white hover:text-soft-blue hover:outline hover:outline-2 hover:outline-soft-blue w-fit py-4 px-7 mx-auto bg-soft-blue my-5 text-white font-medium shadow-md tracking-widest rounded">
            Add & Install Extension
          </button>
        </div>

        <div className=" flex  flex-col text-center shadow-lg rounded-xl translate-y-7 mb-4 md:mb-0">
          <img
            src="/images/logo-firefox.svg"
            alt="Chrome logo"
            className="w-2/5 mx-auto my-10"
          />
          <h3 className=" text-xl font-medium text-very-dark-blue mb-3">
            Add to Firefox
          </h3>
          <span className=" text-grayish-blue mb-8 text-sm">
            Minimum version 5.5
          </span>
          <img src="/images/bg-dots.svg" alt="" />
          <button className="text-sm hover:bg-white hover:text-soft-blue hover:outline hover:outline-2 hover:outline-soft-blue w-fit py-4 px-7 mx-auto bg-soft-blue my-5 text-white font-medium shadow-md tracking-widest rounded">
            Add & Install Extension
          </button>
        </div>

        <div className=" flex  flex-col text-center shadow-lg rounded-xl translate-y-14 mb-4 md:mb-0">
          <img
            src="/images/logo-opera.svg"
            alt="Chrome logo"
            className="w-2/5 mx-auto my-10"
          />
          <h3 className=" text-xl font-medium text-very-dark-blue mb-3">
            Add to Opera
          </h3>
          <span className=" text-grayish-blue mb-8 text-sm">
            Minimum version 4.6
          </span>
          <img src="/images/bg-dots.svg" alt="" />
          <button className="text-sm hover:bg-white hover:text-soft-blue hover:outline hover:outline-2 hover:outline-soft-blue w-fit py-4 px-7 mx-auto bg-soft-blue my-5 text-white font-medium shadow-md tracking-widest rounded">
            Add & Install Extension
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;
