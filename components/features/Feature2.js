import React from "react";

const Feature2 = () => {
  return (
    <div className="py-20 flex md:flex-row flex-col justify-between gap-x-10">
      <div className="md:w-3/5 w-10/12 mx-auto flex justify-end flex-grow-0  relative feature2-img">
        <img src="/images/illustration-features-tab-2.svg" alt="" />
      </div>
      <div className="md:ml-36 md:w-2/5 w-10/12 mx-auto text-center md:text-left md:mt-16 mt-20">
        <h2 className="text-4xl font-medium">Intelligent Search</h2>
        <p className=" mt-5 text-lg mr-4 text-grayish-blue">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <div className="flex items-center md:justify-start justify-center gap-10 mt-8">
          <button className=" bg-soft-blue text-white font-medium  text-sm shadow-md tracking-widest px-7 py-4 rounded">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
