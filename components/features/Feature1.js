import React from "react";

const Feature1 = () => {
  return (
    <div className="py-20 flex md:flex-row flex-col justify-between gap-x-10">
      <div className="md:w-3/5 w-10/12 mx-auto flex justify-end flex-grow-0 relative feature-img">
        <img src="/images/illustration-features-tab-1.svg" alt="" />
      </div>
      <div className="md:ml-36 md:w-2/5 w-10/12 mx-auto text-center md:text-left md:mt-16 mt-32">
        <h2 className="md:text-4xl text-3xl font-medium">
          Bookmark in one click
        </h2>
        <p className=" mt-5 text-lg mr-4 text-grayish-blue">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
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

export default Feature1;
