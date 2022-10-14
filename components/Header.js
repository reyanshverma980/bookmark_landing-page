import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-36 my-16">
      <div className=" flex-grow">
        <img src="/images/logo-bookmark.svg" />
      </div>
      <nav className="pr-12">
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
      <button className="font-medium hover:bg-white hover:text-soft-red hover:outline hover:outline-2 hover:outline-soft-red text-sm uppercase shadow-md tracking-widest bg-soft-red text-white px-9 py-3 rounded">
        Login
      </button>
    </header>
  );
};

export default Header;
