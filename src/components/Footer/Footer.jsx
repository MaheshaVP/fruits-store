import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import NavBarMenu from "../Menudata";

const Footer = () => {
  return (
    <footer className="bg-primary/15 py-8 mt-6" id="#contact">
      <div className="flex justify-end px-10 mx-10">
        <ul className="flex items-center gap-6 text-gray-600">
          {NavBarMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="inline-block py-1 px-3 hover:text-primary  font-semibold"
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center"
      >
        <div className="text-4xl flex items-center gap-2 font-bold">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">store</p>
          <FaLeaf className="text-green-500" />
        </div>

        <div className="text-3xl flex items-center gap-10 mt-6 text-gray-700 ">
          <FaInstagram className="hover:text-black" />
          <FaTwitter className="hover:text-black" />
          <FaFacebook className="hover:text-black" />
        </div>
      </motion.div>

      <div className="py-2 mt-4 flex justify-center items-center">
        <p className="text-1xl">&copy; 2025 Fruits-Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
