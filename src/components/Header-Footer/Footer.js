import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-12">
      <ul className="flex flex-wrap justify-center gap-8 mb-8">
        <li className="footer-list-item">Terms Of Use</li>
        <li className="footer-list-item">Privacy-Policy</li>
        <li className="footer-list-item">About</li>
        <li className="footer-list-item">Blog</li>
        <li className="footer-list-item">FAQ</li>
      </ul>
      <div className="text-center text-xs text-gray-400 md:text-sm mb-8 max-w-screen-lg mx-auto">
       © 2023 Design by Rohit Phalke
      </div>
      <div className="flex justify-center gap-4">
        <a href="#">
          <span className="footer-span">
            <FaFacebookF />
          </span>
        </a>
        <a href="#">
          <span className="footer-span">
            <FaInstagram />
          </span>
        </a>
        <a href="#">
          <span className="footer-span">
            <FaTwitter />
          </span>
        </a>
        <a
          href="#"
          target="_blank"
        >
          <span className="footer-span">
            <FaLinkedin />
          </span>
        </a>
        <a href="#" target="_blank">
          <span className="footer-span">
            <FaGithub />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;