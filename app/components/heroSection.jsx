"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:place-items-center">
        <div className="col-span-8 place-self-center text-center lg:text-left justify-self-center">
          <h1 className="text-white mb-4 text-xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary">
              Greetings!, I&apos;m Azka
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Backend Developer",
                1000,
                "Future Fullstack Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Yōkoso Watashi Websaito.
          </p>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#ffffff] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/jeka.png"
            width={280}
            height={280}
            alt="Azka"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
