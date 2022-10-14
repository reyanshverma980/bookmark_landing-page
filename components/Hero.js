import React from "react";

const Hero = () => {
  return (
    <section className=" py-10 flex justify-between gap-10">
      <div className="ml-36 w-2/5 mt-16">
        <h1 className="text-5xl font-medium">A Simple Bookmark Manager</h1>
        <p className=" mt-8 text-lg mr-4 text-grayish-blue">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex items-center gap-10 mt-8">
          <button className=" bg-soft-blue hover:bg-white hover:text-soft-blue hover:outline hover:outline-2 hover:outline-soft-blue text-white font-medium  text-sm shadow-md tracking-widest px-7 py-4 rounded">
            Get it on Chrome
          </button>
          <button className=" bg-light-grayish-blue text-very-dark-blue hover:outline hover:outline-2 hover:outline-very-dark-blue font-medium text-sm shadow-md tracking-widest px-7 py-4 rounded">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="w-1/2 flex-grow-0 pr-8 relative hero-img">
        <img src="/images/illustration-hero.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
