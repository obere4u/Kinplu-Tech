import React from 'react';
import kinPlusLogo from '../../assets/kinPlus-logo.png'

export default function Footer() {
  return (
    <div className="bg-[#022144] text-white">
      <div className="flex justify-center items-center gap-3 ">
        <div className="basis-1/3">
          <div>
            <img
              src={kinPlusLogo}
              alt="KinPlus Technologies"
              className='text-white bg-white'
            />
          </div>
          <div>
            <p>
              Kinplus Technologies is a software development company focused on
              building scalable applications and software for businesses,
              corporate organisations, and individuals.
            </p>
          </div>
        </div>
        <div className="basis-1/3">
          <h2>Links</h2>
          <ul>
            <a href="#">
              <li>Homepage</li>
            </a>
            <a href="#">
              <li>Know more about us</li>
            </a>
            <a href="#">
              <li>Our training programs</li>
            </a>
            <a href="#">
              <li>Get in touch with us</li>
            </a>
            <a href="#">
              <li>Internship programs</li>
            </a>
            <a href="#">
              <li>IT / SIWES program</li>
            </a>
          </ul>
        </div>
        <div className="basis-1/3">
          <div>
            <p>Address</p>
            <p>
              Top Floor, 68B Christore Building, Opp. Crunchies Restaurant,
              Similoluwa, Ado Ekiti, Ekiti State, Nigeria. Email:
              help@kinplusgroup.com Phone: +2347069718643, +2348071572767
            </p>
          </div>
          <div>
            <ul>
              <a href="#">
                <li> Whatsapp</li>
              </a>
              <a href="#">
                <li> Facebook</li>
              </a>
              <a href="#">
                <li>Email</li>
              </a>
              <a href="#">
                <li>Telegram</li>
              </a>
              <a href="#">
                <li>Twitter</li>
              </a>
              <a href="#">
                <li>LinkedIn</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <small>
        Copyright &copy; 2023 Kinplus Technologies All Right Reserved.
      </small>
    </div>
  );
}
