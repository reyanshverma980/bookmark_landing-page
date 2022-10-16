import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-32 ">
      <div className="bg-soft-blue">
        <div className=" md:w-2/5 w-10/12 mx-auto text-center flex flex-col">
          <span className="mt-10 mb-8 text-white text-lg">
            35,000+ already joined
          </span>
          <h2 className="md:text-4xl text-3xl font-medium text-white">
            Stay up-to-date with what we’re doing
          </h2>
          <form className=" flex sm:flex-row flex-col  sm:items-center gap-x-6 justify-center sm:mt-8 mt-12 mb-20">
            <div className=" relative flex flex-col flex-grow mb-8 sm:mb-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className=" peer min-w-fit invalid:outline invalid:outline-2 invalid:outline-soft-red outline-0 py-3 px-6 text-lg rounded-t"
              />
              <p className=" absolute outline outline-2 outline-soft-red invisible text-left py-1 rounded-b-md px-6 w-full -bottom-6  bg-soft-red peer-invalid:visible text-white text-xs">
                Whoops, Make sure it's an email
              </p>
              <img
                src="/images/icon-error.svg"
                alt=""
                className="absolute top-1/2 -translate-y-1/2 right-4 invisible peer-invalid:visible"
              />
            </div>

            <button className="bg-soft-red hover:bg-white hover:text-soft-red hover:outline hover:outline-2 hover:outline-soft-red text-white font-medium  text-sm shadow-md tracking-widest px-7 py-4 rounded">
              Contact Us
            </button>
          </form>
        </div>
      </div>

      {/* footer links */}
      <div className="bg-very-dark-blue flex md:flex-row flex-col  items-center px-36 py-8">
        <div>
          <img src="/images/logo-bookmark-white.svg" />
        </div>
        <nav className="md:pl-16 md:my-0 my-10">
          <ul className="flex md:flex-row flex-col items-center text-white text-sm uppercase tracking-widest gap-x-10 gap-y-8">
            <li>
              <a href="#" className="hover:text-soft-red">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-soft-red">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-soft-red">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex-grow flex items-center justify-end gap-x-10">
          <a href="#">
            <img
              src="/images/icon-facebook.svg"
              alt="facebook"
              className="icon"
            />
          </a>
          <a href="#">
            <img
              src="/images/icon-twitter.svg"
              alt="twitter"
              className="icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
