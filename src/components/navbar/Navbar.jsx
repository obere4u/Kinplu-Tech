import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import MobileItems from "../MobileItems";


export default function navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <ul className="hidden lg:flex items-center justify-center gap-1 ml-auto text-[#d6d9e1] text-[12px]">
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
    <div className=" bg-[#022144] py-3 w-full">
      <div className="bg-[#022144] flex items-center text-white px-10 pt-5  max-w-7xl ">
        <a href="#home">
          <h2 className="text-lg font-semibold tracking-tighter lg:text-2xl">
            KINPLUS TECHNOLOGIES
          </h2>
        </a>
        <Menu />
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
            className="ml-auto lg:hidden   "
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
            className="ml-auto lg:hidden  "
          />
        )}
        {toggleMenu && (
          <div className="animate-slideLeft ">
            <MobileItems />
          </div>
        )}
      </div>
    </div>
  );
}
