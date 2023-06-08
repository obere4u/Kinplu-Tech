import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import MobileItems from "../MobileItems";
import "../../index.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function showMenu() {
    setToggleMenu((prevState) => !prevState);
  }

  const Menu = () => (
    <>
      <ul className="hidden uppercase lg:flex items-center justify-center gap-1 ml-auto text-[#d6d9e1] text-[12px] font-poppins">
        <a
          href=""
          className="px-2 py-2"
        >
          <li
            id="home"
            className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest"
          >
            HOME
          </li>
        </a>
        <a
          href=""
          className="px-2 py-2"
        >
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest">
            ABOUT
          </li>
        </a>
        <a
          href=""
          className="px-2 py-2"
        >
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest">
            TRAINING
          </li>
        </a>
        <a
          href=""
          className="px-2 py-2"
        >
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest">
            CONTACT
          </li>
        </a>
        <a
          href=""
          id="nav_active"
          className="px-2 py-2"
        >
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest">
            INTERNSHIP
          </li>
        </a>
        <a
          href=""
          className="px-2 py-2"
        >
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest">
            IT / SIWES
          </li>
        </a>
      </ul>
    </>
  );

  return (
    <div className="bg-[#022144] w-full fixed">
      <div className="py-3 mx-auto max-w-7xl">
        <div className="flex items-center  text-white px-5  lg:pt-5 pt-2 sm:px-10">
          <a href="#home">
            <h2 className="text-sm font-semibold tracking-tighter sm:text-2xl">
              KINPLUS TECHNOLOGIES
            </h2>
          </a>
          <Menu />
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={showMenu}
              className="ml-auto lg:hidden"
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={showMenu}
              className="ml-auto lg:hidden"
            />
          )}
          {toggleMenu && (
            <MobileItems
              showMenu={showMenu}
              toggleMenu={toggleMenu}
            />
          )}
        </div>
      </div>
    </div>
  );
}
