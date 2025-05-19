import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import NavBarMenu from "../Menudata";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-6"
        >
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">store</p>
            <FaLeaf className="text-green-500" />
          </div>

          {/* main section */}
          <div className="hidden md:block ">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavBarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}

              <button
                aria-label="Shopping Cart"
                className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200"
              >
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* mobile menu toggle button */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* mobile menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
