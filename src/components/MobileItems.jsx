import React from "react";
import {RiCloseLine} from 'react-icons/ri'
import PropTypes from "prop-types";
import '../index.css'

MobileItems.propTypes = {
  showMenu: PropTypes.func.isRequired,
  toggleMenu: PropTypes.bool.isRequired,
};

export default function MobileItems({showMenu, toggleMenu}) {
  return (
    <div
      className={`${
        toggleMenu
          ? "fixed inset-0 left-1/2 bg-[#022144] uppercase flex-col text-[#d6d9e1] text-[12px] font-poppins mx-auto lg:hidden"
          : "hidden"
      }`}
    >
      <RiCloseLine
        color="#fff"
        size={27}
        onClick={showMenu}
        className="my-8 ml-auto mr-6"
      />
      <ul className="ml-5 sm:ml-20">
        <a href="">
          <li
            id="home"
            className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest w-[70px]"
          >
            Home
          </li>
        </a>
        <a href="">
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest w-[70px]">
            About
          </li>
        </a>
        <a href="">
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest w-[80px]">
            Training
          </li>
        </a>
        <a href="">
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest w-[80px]">
            Contact
          </li>
        </a>
        <a
          href=""
          id="nav_active"
        >
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest w-[90px]">
            Internship
          </li>
        </a>
        <a href="">
          <li className="hover:bg-cyan-900 border-transparent hover:border-transparent rounded px-2 py-1 tracking-widest w-[90px]">
            IT / SIWES
          </li>
        </a>
      </ul>
    </div>
  );
}
