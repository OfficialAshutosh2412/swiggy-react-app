import React from "react";
import swiggyLogo from "../assets/swiggy-1.svg";

const Navbar = () => {
  const navLinkStyle = {
    decoration:
      "flex items-center justify-center gap-1 relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:border after:border-transparent hover:after:border-orange-500 p-1 after:transition-all after:duration-300 after:ease-in-out hover:text-orange-500",
  };
  return (
    <nav className="flex w-full items-center justify-evenly shadow-md  h-14">
      <div className="flex items-center gap-8">
        <img src={swiggyLogo} alt="" className="w-6" />
        <span className="flex items-center gap-3">
          <label
            className="text-xs cursor-pointer font-bold relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:border after:border-black shadow-black p-1 pl-0 pr-0 text-gray-700 capitalize"
            htmlFor="hidden-options"
          >
            other
          </label>
          <i
            className="fi fi-br-angle-small-down mt-2 cursor-pointer text-orange-500 text-lg"
            id="hidden-options"
          ></i>
        </span>
      </div>
      <ul className="flex items-center gap-8 font-semibold capitalize text-sm">
        <li className="flex justify-center items-center">
          <a href="#" className={navLinkStyle.decoration}>
            <i className="fi fi-rs-shopping-bag mt-1"></i>
            <p className="">swiggy corporate</p>
          </a>
        </li>
        <li>
          <a href="#" className={navLinkStyle.decoration}>
            <i className=" fi fi-rs-search mt-1"></i>
            <p>search</p>
          </a>
        </li>
        <li>
          <a href="#" className={navLinkStyle.decoration}>
            <i className=" fi fi-rr-badge-percent mt-1"></i>
            <p>offer</p>
          </a>
        </li>
        <li>
          <a href="#" className={navLinkStyle.decoration}>
            <i className=" fi fi-rr-info mt-1"></i>
            <p>help</p>
          </a>
        </li>
        <li>
          <a href="#" className={navLinkStyle.decoration}>
            <i className=" fi fi-rs-user mt-1"></i>
            <p>sign in</p>
          </a>
        </li>
        <li>
          <a href="#" className={navLinkStyle.decoration}>
            <i className=" fi fi-rr-shopping-cart mt-1"></i>
            <p>cart</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
