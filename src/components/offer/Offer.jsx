import React from "react";
import PropTypes from "prop-types";

Offer.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function Offer({ image, imageAlt, title, text, url }) {
  return (
    <div className="font-poppins border shadow-grey-500 shadow-md rounded-lg  hover:border hover:shadow-gray-700 max-w-sm flex flex-col">
      <div className="flex">
        <img
          src={image}
          alt={imageAlt}
          className="h-40 bg-white mx-auto mt-6"
        />
      </div>
      <div className="px-4 mb-20">
        <h1 className="uppercase text-xl font-semibold my-4 text-[#3b2144]">
          {title}
        </h1>
        <p>{text}</p>
      </div>
      <div className="flex-grow"></div>
      <div className="bg-[#f5f5f5] w-full py-3 px-4 ">
        <a
          href={url}
          className="text-[#50b4f4] text-center hover:text-[#50b4f4]/60 block"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
