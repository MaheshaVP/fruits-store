import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import NavBarMenu from "../Menudata";

const Footer = () => {
  return (
    <footer className="bg-primary/15 py-8 mt-6" id="#contact">
      {/* Navigation Links */}
      <div className="px-4 md:px-10 mb-6">
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-gray-600">
          {NavBarMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="inline-block py-1 px-3 hover:text-primary font-semibold"
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Logo and Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4"
      >
        {/* Logo */}
        <div className="text-3xl flex items-center gap-2 font-bold mb-4 md:mb-0">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">store</p>
          <FaLeaf className="text-green-500" />
        </div>

        {/* Social Media Icons */}
        <div className="text-2xl flex gap-6 text-gray-700">
          <FaInstagram className="hover:text-black cursor-pointer" />
          <FaTwitter className="hover:text-black cursor-pointer" />
          <FaFacebook className="hover:text-black cursor-pointer" />
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="py-4 mt-6 flex justify-center text-center">
        <p className="text-sm text-gray-600 md:text-[20px]">
          &copy; 2025 Fruits-Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
