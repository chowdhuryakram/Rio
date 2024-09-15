import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container flex justify-between items-center py-5">
        <div className="">
          <h1>
            <a className="text-[28px] font-bold leading-[27px]" href="#">
              Rio
            </a>
          </h1>
        </div>
        <div className="navbar inline-block max-w-[500px] mx-auto">
          <ul className="flex items-center gap-5">
            <li>
              <a className="text-[18px] font-bold leading-[27px]" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-[18px] font-bold leading-[27px]" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-[18px] font-bold leading-[27px]" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="btn"></div>
        <button className="text-white bg-[#00e] py-3 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
