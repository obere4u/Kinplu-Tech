import React from "react";

export default function MobileItems() {
  return (
    <ul className="flex-col items-center justify-center fixed inset-0 left-1/4 bg-[#022144] lg:hidden">
      <a href="">
        <li id="home">HOME</li>
      </a>
      <a href="">
        <li>ABOUT</li>
      </a>
      <a href="">
        <li>TRAINING</li>
      </a>
      <a href="">
        <li>CONTACT</li>
      </a>
      <a
        href=""
        id="nav_active"
      >
        <li>INTERNSHIP</li>
      </a>
      <a href="">
        <li>IT / SIWES</li>
      </a>
    </ul>
  );
}
