import React from "react";

const Feature2 = () => {
  return (
    <div className="py-20  flex justify-between relative gap-10">
      <div className="w-1/2 flex-grow-0 pl-72  feature-img">
        <img src="/images/illustration-features-tab-2.svg" alt="" />
      </div>
      <div className="ml-36 w-2/5 mt-16">
        <h2 className="text-4xl font-medium">Intelligent Search</h2>
        <p className=" mt-5 text-lg mr-4 text-grayish-blue">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <div className="flex items-center gap-10 mt-8">
          <button className=" bg-soft-blue text-white font-medium  text-sm shadow-md tracking-widest px-7 py-4 rounded">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
