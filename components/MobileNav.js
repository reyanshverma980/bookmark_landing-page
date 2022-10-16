import React from "react";

const MobileNav = (props) => {
  return (
    <div className="absolute z-10 top-0 bottom-0 left-0 right-0 flex flex-col bg-very-dark-blue bg-opacity-95 py-12 ">
      <div className="flex justify-between w-10/12 mx-auto">
        <img src="/images/logo-bookmark-mobileNav.svg" alt="" />
        <button onClick={props.toggle}>
          <img src="/images/icon-close.svg" alt="" />
        </button>
      </div>
      <nav className="w-10/12 mx-auto mt-16 mb-8">
        <ul className="flex flex-col items-center text-white uppercase text-center text-lg tracking-widest">
          <li className="border-y border-grayish-blue w-full py-5">
            <a href="#">Features</a>
          </li>
          <li className="border-b border-grayish-blue w-full py-5">
            <a href="#">Pricing</a>
          </li>
          <li className="border-b border-grayish-blue w-full py-5">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className=" uppercase w-10/12 mx-auto border-2 border-white text-lg text-white tracking-widest  py-3">
        Login
      </button>
      <div className="flex-grow flex items-end justify-center gap-x-10 w-10/12 mx-auto">
        <a href="#">
          <img src="/images/icon-facebook.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="/images/icon-twitter.svg" alt="twitter" />
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
