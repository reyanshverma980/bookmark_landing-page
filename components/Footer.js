import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-32 ">
      <div className="bg-soft-blue">
        <div className=" w-2/5 mx-auto text-center flex flex-col">
          <span className="mt-10 mb-8 text-white text-lg">
            35,000+ already joined
          </span>
          <h2 className="text-4xl font-medium text-white">
            Stay up-to-date with what we’re doing
          </h2>
          <form className=" flex  items-center gap-x-6 justify-center mt-8 mb-20">
            <div className=" relative flex flex-col flex-grow">
              <input
                type="email"
                placeholder="Enter your email address"
                className=" peer min-w-fit invalid:outline invalid:outline-2 invalid:outline-soft-red outline-0 py-3 px-6 text-lg rounded-t"
              />
              <p className=" absolute outline outline-2 outline-soft-red invisible text-left py-1 rounded-b-md px-6 w-full -bottom-6  bg-soft-red peer-invalid:visible text-white text-xs">
                Whoops, Make sure it's an email
              </p>
            </div>

            <button className="bg-soft-red hover:bg-white hover:text-soft-red hover:outline hover:outline-2 hover:outline-soft-red text-white font-medium  text-sm shadow-md tracking-widest px-7 py-4 rounded">
              Contact Us
            </button>
          </form>
        </div>
      </div>

      {/* footer links */}
      <div className="bg-very-dark-blue flex items-center px-36 py-8">
        <div>
          <img src="/images/logo-bookmark-white.svg" />
        </div>
        <nav className="pl-16">
          <ul className="flex items-center text-white text-sm uppercase tracking-widest gap-10">
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
