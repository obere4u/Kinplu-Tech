import React from "react";
import Navbar from "../../components/navbar/Navbar";

export default function Header() {
  return (
    <div className="mx-auto">
      <Navbar />
      <h2 className="font-bold bg-blue-400 text-center text-sm lg:text-lg text-white px-10 pt-20 lg:pt-32 pb-10 font-poppins">
        Digital Skill Training and Internship for Youths in Ekiti
      </h2>
    </div>
  );
}
