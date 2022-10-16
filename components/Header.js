import React from "react";

const Header = (props) => {
  return (
    <header className="flex relative items-center justify-between lg:px-36 md:px-20 md:w-full w-10/12 mx-auto my-16">
      <div className="flex-grow flex-shrink-0">
        <img src="/images/logo-bookmark.svg" />
      </div>
      {!props.nav && (
        <button onClick={props.toggle} className="md:hidden">
          <img src="/images/icon-hamburger.svg" alt="" />
        </button>
      )}
      <nav className="pr-12 md:block hidden lg:pl-0 pl-10 ">
        <ul className="flex items-center text-sm uppercase tracking-widest gap-10">
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
      <button className="md:inline hidden font-medium hover:bg-white hover:text-soft-red hover:outline hover:outline-2 hover:outline-soft-red text-sm uppercase shadow-md tracking-widest bg-soft-red text-white px-9 py-3 rounded">
        Login
      </button>
    </header>
  );
};

export default Header;
