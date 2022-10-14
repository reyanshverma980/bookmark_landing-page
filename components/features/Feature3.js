import React from "react";

const Feature3 = () => {
  return (
    <div className="py-20 flex justify-between relative gap-10">
      <div className="w-1/2 flex-grow-0 pl-64 feature-img">
        <img src="/images/illustration-features-tab-3.svg" alt="" />
      </div>
      <div className="ml-36 w-2/5 mt-16">
        <h2 className="text-4xl font-medium">Share your bookmarks</h2>
        <p className=" mt-5 text-lg mr-4 text-grayish-blue">
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
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

export default Feature3;
