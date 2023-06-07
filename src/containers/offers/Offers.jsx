import React from "react";
import { Offer } from "../../components/";
import {
  softwareEngr,
  uIUX,
  dataSci,
  ioT,
  repairHard,
  projectMan,
  graphicsDes,
} from "./import.js";

const offersData = [
  {
    title: "Software Development",
    text: "Immerse yourself in the core principles of software development and learn the necessary programming skills required for Web, Mobile or Desktop Application Development while working on projects.",
    img: `${softwareEngr}`,
    imgAlt: "Image of software engineer with multiple programming language",
    url: "#",
  },

  {
    title: "UI/UX Design",
    text: "Equip yourself with proper user interface, user experience, prototyping, wireframing and graphic design skills. Understanding different types of users and what they want, desirability and usability of a product, leveraging edge-cutting design tools.",
    imgAlt: "Image of UI/UX designer",
    img: `${uIUX}`,
    url: "#",
  },

  {
    title: "Graphics Design",
    text: "Learn how to determine objectives for decision-making, through creativity, innovation and lateral thinking along with manual or digital tools, transforming them for proper interpretation.",
    img: `${graphicsDes}`,
    imgAlt: "Image of graphics designer",
    url: "#",
  },

  {
    title: "Project Management",
    text: "Learn the process of leading the work of a team to achieve all project goals within the given constraints.",
    img: `${projectMan}`,
    imgAlt: "Image of project manager",
    url: "#",
  },

  {
    title: "Hardware maintenance and repairs",
    text: "Learn how to reference the variety of support services provided for the optimization and/or repair of server, network and storage hardware.",
    img: `${repairHard}`,
    imgAlt: "Image of computer hardwares",
    url: "#",
  },

  {
    title: "Data science/Analysis",
    text: "Learn the process of inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.",
    img: `${dataSci}`,
    imgAlt: "Image of computer",
    url: "#",
  },

  {
    title: "IT Automation/IoT",
    text: "Learn the technologies designed to facilitate the user’s life, automating specific processes, allowing remote control,simplifying plant management, and generally optimizing the management of the environment.",
    img: `${ioT}`,
    imgAlt: "Image of computer",
    url: "#",
  },
];

export default function Offers() {
  return (
    <div className="font-poppins max-w-7xl mt-20">
      <p className="text-center mb-6">
        <span className="font-semibold"> Duration: </span>6 Months
      </p>
      <div className="flex flex-wrap justify-center item-center gap-3 mb-10">
        {offersData.map((item, index) => (
          <Offer
            key={item.title + index}
            image={item.img}
            imageAlt={item.imgAlt}
            title={item.title}
            text={item.text}
            url={item.url}
          />
        ))}
      </div>
      <p className="bg-[#2196f3] text-center text-white font-semibold py-3">Sponsor: Akintunde Oyebode</p>
    </div>
  );
}
