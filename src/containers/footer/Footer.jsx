import React from "react";
import kinPlusLogo from "../../assets/kinPlus-logo.png";
import {
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiFacebookCircleFill,
  RiMailLine,
  RiTelegramFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-[#022144]">
      <div className="text-white pt-10 px-8 sm:px-10 font-poppins max-w-7xl">
        <div className="sm:grid grid-cols-1 sm:grid-cols-2 pt-8 lg:grid-cols-3 lg:gap-4 mb-20">
          <div className="">
            <div>
              <img
                src={kinPlusLogo}
                alt="KinPlus Technologies"
                className="bg-white w-[10em]"
              />
            </div>
            <div>
              <p className="mt-3 text-sm">
                Kinplus Technologies is a software development company focused
                on building scalable applications and software for businesses,
                corporate organisations, and individuals.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start sm:mt-1 mx-auto mt-10">
            <h2 className="text-xl mb-3">Links</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <a
                href="#"
                className="hover:text-[#c9cbb8]"
              >
                <li>Homepage</li>
              </a>
              <a
                href="#"
                className="hover:text-[#c9cbb8]"
              >
                <li>Know more about us</li>
              </a>
              <a
                href="#"
                className="hover:text-[#c9cbb8]"
              >
                <li>Our training programs</li>
              </a>
              <a
                href="#"
                className="hover:text-[#c9cbb8]"
              >
                <li>Get in touch with us</li>
              </a>
              <a
                href="#"
                className="hover:text-[#c9cbb8]"
              >
                <li>Internship programs</li>
              </a>
              <a
                href="#"
                className="hover:text-[#c9cbb8]"
              >
                <li>IT / SIWES program</li>
              </a>
            </ul>
          </div>
          <div className="sm:grid grid-cols-2 col-span-2 gap-20 mt-10 lg:grid-cols-1 lg:gap-0 lg:col-auto lg:mt-1">
            <div className="mb-6">
              <p className="text-xl">Address</p>
              <p className="text-sm">
                Top Floor, 68B Christore Building, Opp. Crunchies Restaurant,
                Similoluwa, Ado Ekiti, Ekiti State, Nigeria.
                <br />
                <span className="font-bold mt-5 block">Email: </span>
                help@kinplusgroup.com
                <br />
                <span className="font-bold mt-3 block">Phone: </span> +2347069718643,
                +2348071572767
              </p>
            </div>
            <div>
              <ul>
                <a
                  href="#"
                  className="hover:text-[#c9cbb8]"
                >
                  <li className="flex items-center gap-2">
                    <RiWhatsappFill />
                    Whatsapp
                  </li>
                </a>
                <a
                  href="#"
                  className="hover:text-[#c9cbb8]"
                >
                  <li className="flex items-center gap-2">
                    <RiFacebookCircleFill />
                    Facebook
                  </li>
                </a>
                <a
                  href="#"
                  className="hover:text-[#c9cbb8]"
                >
                  <li className="flex items-center gap-2">
                    <RiMailLine />
                    Email
                  </li>
                </a>
                <a
                  href="#"
                  className="hover:text-[#c9cbb8]"
                >
                  <li className="flex items-center gap-2">
                    <RiTelegramFill />
                    Telegram
                  </li>
                </a>
                <a
                  href="#"
                  className="hover:text-[#c9cbb8]"
                >
                  <li className="flex items-center gap-2">
                    <RiTwitterFill />
                    Twitter
                  </li>
                </a>
                <a
                  href="#"
                  className="hover:text-[#c9cbb8]"
                >
                  <li className="flex items-center gap-2">
                    <RiLinkedinBoxFill />
                    LinkedIn
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <small className="text-center block pb-5 text-[10px] sm:text-sm">
          Copyright &copy; 2023{" "}
          <span className="block sm:inline-block text-[10px] sm:text-sm">
            Kinplus Technologies All Right Reserved.
          </span>
        </small>
      </div>
    </div>
  );
}
