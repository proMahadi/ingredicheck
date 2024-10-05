import React, { useState } from "react";
import Container from "../../../common/Container";
import logo from "../../../assets/navbarImages/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg-white rounded-b-2xl relative">
      <Container className="py-5 md:py-4 ">
        <div className="flex items-center justify-between px-4 lg:px-0">
          <div>
            <img src={logo} alt="nav logo" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-x-6">
              <li>
                <ul className="flex gap-x-8">
                  <li className="font-inter text-base w-[46px] text-[#9EA19B] hover:text-[#4F5449] font-medium hover:font-bold capitalize duration-200 cursor-pointer">
                    <NavLink to="/">home</NavLink>
                  </li>
                  <li className="font-inter text-base w-[46px] text-[#9EA19B] hover:text-[#4F5449] font-medium hover:font-bold capitalize duration-200 cursor-pointer">
                    <NavLink to="/about">about</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">
                  <button className="py-[18px] px-6 rounded-[32px] bg-color1 text-white font-inter font-medium ">
                    Download
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="block md:hidden"
          >
            {showNav ? (
              // cross
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.53 17.47C18.823 17.763 18.823 18.238 18.53 18.531C18.384 18.677 18.192 18.751 18 18.751C17.808 18.751 17.616 18.678 17.47 18.531L12 13.061L6.52999 18.531C6.38399 18.677 6.19199 18.751 5.99999 18.751C5.80799 18.751 5.61599 18.678 5.46999 18.531C5.17699 18.238 5.17699 17.763 5.46999 17.47L10.94 12L5.46999 6.53005C5.17699 6.23705 5.17699 5.76202 5.46999 5.46902C5.76299 5.17602 6.238 5.17602 6.531 5.46902L12.001 10.939L17.471 5.46902C17.764 5.17602 18.239 5.17602 18.532 5.46902C18.825 5.76202 18.825 6.23705 18.532 6.53005L13.062 12L18.53 17.47Z"
                  fill="#25314C"
                />
              </svg>
            ) : (
              // cross
              // bars
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7333 8H1.26667C0.567106 8 0 8.42533 0 8.95V9.05C0 9.57467 0.567106 10 1.26667 10H22.7333C23.4329 10 24 9.57467 24 9.05V8.95C24 8.42533 23.4329 8 22.7333 8Z"
                  fill="#000B33"
                />
                <path
                  d="M22.7333 15.5H1.26667C0.567106 15.5 0 15.9253 0 16.45V16.55C0 17.0747 0.567106 17.5 1.26667 17.5H22.7333C23.4329 17.5 24 17.0747 24 16.55V16.45C24 15.9253 23.4329 15.5 22.7333 15.5Z"
                  fill="#000B33"
                />
                <path
                  d="M22.7333 0.499756H1.26667C0.567106 0.499756 0 0.925085 0 1.44976V1.54976C0 2.07443 0.567106 2.49976 1.26667 2.49976H22.7333C23.4329 2.49976 24 2.07443 24 1.54976V1.44976C24 0.925085 23.4329 0.499756 22.7333 0.499756Z"
                  fill="#000B33"
                />
              </svg>
              // bars
            )}
          </div>
        </div>
        {/* small device navbar */}
        <div
          className={`absolute bg-white rounded-b-2xl w-full  md:hidden grid overflow-hidden transition-all duration-300 ease-in-out py-6 px-10 z-50 ${
            showNav
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-y-10 overflow-hidden">
            <li>
              <ul className="flex flex-col gap-y-10">
                <li className="font-inter text-base w-[46px] text-[#9EA19B] hover:text-[#4F5449] font-medium hover:font-bold capitalize duration-200 cursor-pointer">
                  <NavLink to="/">home</NavLink>
                </li>
                <li className="font-inter text-base w-[46px] text-[#9EA19B] hover:text-[#4F5449] font-medium hover:font-bold capitalize duration-200 cursor-pointer">
                  <NavLink to="/about">about</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">
                <button className="py-[18px] px-6 rounded-[32px] bg-color1 text-white font-inter font-medium w-full">
                  Download
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {/* small device navbar */}
      </Container>
    </div>
  );
};

export default Navbar;
