import React from "react";
import swiggyLogo from "../assets/swiggy-1.svg";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const navLink = [
    {
      navLabel: "swiggy corporate",
      navIcon: "fi-rs-shopping-bag",
    },
    {
      navLabel: "search",
      navIcon: "fi-rs-search",
    },
    {
      navLabel: "offer",
      navIcon: "fi-rr-badge-percent",
    },
    {
      navLabel: "help",
      navIcon: "fi-rr-info",
    },
    {
      navLabel: "sign in",
      navIcon: "fi-rs-user",
    },
    {
      navLabel: "cart",
      navIcon: "fi-rr-shopping-cart",
    },
  ];
  return (
    <>
      <nav className="flex w-full items-center justify-evenly shadow-md  h-14">
        <div className="flex items-center gap-8">
          <Link to={"/"}>
            <img src={swiggyLogo} alt="" className="w-6" />
          </Link>

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
          {navLink.map((data, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center justify-center gap-1 relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:border after:border-transparent hover:after:border-orange-500 p-1 after:transition-all after:duration-300 after:ease-in-out hover:text-orange-500"
              >
                <i className={`fi ${data.navIcon} mt-1`}></i>
                <p>{data.navLabel}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
