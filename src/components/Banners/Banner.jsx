import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <section className="bg-secondary/10" id="#about">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* banner image  */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt="Banner"
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
        {/* banner info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Fruits Store offers farm-fresh, high-quality fruits with a focus
              on health, taste, and sustainability. We deliver natural goodness
              straight from farms to you—freshness you can trust every day.
            </motion.p>
            <motion.p
              variants={FadeUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Fruits Store brings you fresh, juicy fruits straight from the
              farm. Pure, healthy, and delicious—your daily dose of natural
              goodness.
            </motion.p>

            {/* buttob section */}
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
