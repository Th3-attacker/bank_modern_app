import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

interface NavLink {
  id: string;
  title: string;
}
const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-8" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav: NavLink, index: number) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10 `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 h-7 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[120px] rounded-xl sidebar`}
        >
          <ul className="list-none justify-end items-center flex flex-col flex-1">
            {navLinks.map((nav: NavLink, index: number) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-base ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
