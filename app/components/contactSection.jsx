"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { personalData } from "../data/personal-data";
import { motion, useAnimation } from "framer-motion";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { BiLogoDiscord, BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { TbMailForward } from "react-icons/tb";
import Link from "next/link";  

const ContactSection = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "servicezka", // Ganti dengan Service ID Anda
        "templatezka", // Ganti dengan Template ID Anda
        {
          email: form.email,
          message: form.message,
        },
        "Qiaa0SYbl-R5l4BzK" // Ganti dengan Public Key Anda
      )
      .then(
        () => {
          setLoading(false);
          alert("Pesan berhasil dikirim!");
          setForm({
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Terjadi kesalahan:", error);
          alert("An Error is Happening!");
        }
      );
  };
  
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
    >
      {/* Email Form Section */}
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5 bg-[#202838]">
            <h2 className="mb-4 text-2xl font-semibold text-gray-100">
              Contact Me!
            </h2>
            <form
            ref={formRef}
            onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-gray-200 bg-[#202838] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-gray-400"
                >
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  className="w-full h-40 px-4 py-3 text-gray-200 bg-[#202838] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            <div div className="flex flex-col items-center gap-2 mt-4">
              <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              type="submit"
            >
              <span>Send Message</span>
              <TbMailForward className="mt-1" size={18} />
            </button>
            </div>
            </form>
      </div>

      {/* Personal Data Section */}
      <div className="flex justify-center ">
        <div className="w-full max-w-lg">
          <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
            <span className="bg-[#211c44] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
              CONTACT
            </span>
            <span className="h-36 w-[2px] bg-[#1a1443]"></span>
          </div>
          <div className="lg:w-3/4">
            <div className="flex flex-col gap-5 lg:gap-9">
              <p className="text-sm md:text-xl flex items-center gap-3">
                <MdAlternateEmail
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>{personalData.email}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <IoMdCall
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>{personalData.phone}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <CiLocationOn
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>{personalData.address}</span>
              </p>
            </div>
            <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
              <Link target="_blank" href={personalData.github}>
                <IoLogoGithub
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.linkedIn}>
                <BiLogoLinkedin
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.discord}>
                <BiLogoDiscord
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
